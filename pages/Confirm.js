import { useEffect , useState } from "react"
import tw from"tailwind-styled-components"
import Map from "./components/Map"
import { useRouter } from "next/router"
import RideSelector from "./components/RideSelector"

const Confirm = () => {
    const router =useRouter()
    const {pickupLocation,dropLocation} = router.query

    console.log("pick", pickupLocation);
    console.log("drop", dropLocation);

    const [coordinate, setCoordinate] = useState();
    const [dropCoordinate, setDropCoordinate] = useState();

    const getCoordinate =(pickupLocation)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoia2FtYWRrZXJlbiIsImEiOiJja3ZuY3MxcTgxdGpmMnZtdDl5em9vMHl6In0.O9wiASiutTrlYm7KbvRm_g",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data=>{
            setCoordinate(data.features[0].center);
        })
    }

    const getDropCoordinate = (dropLocation)=>{
        const type=[106.58795239718184,-6.13440359514471];
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropLocation}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoia2FtYWRrZXJlbiIsImEiOiJja3ZuY3MxcTgxdGpmMnZtdDl5em9vMHl6In0.O9wiASiutTrlYm7KbvRm_g",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data=>{
            setDropCoordinate(data.features[0].center);
        })
    }

    useEffect(()=>{
        getCoordinate(pickupLocation);
        getDropCoordinate(dropLocation);
    }, [pickupLocation,dropLocation])

    return (
        <Wrapper>
            <Map 
                coordinate={coordinate}
                dropCoordinate={dropCoordinate}
            />
            <Container>
                <RideSelector />

                <ConfirmContainer>
                Confirm Your Order
                </ConfirmContainer>
            </Container>
        </Wrapper>
    )
}

export default Confirm

const Wrapper =tw.div`
flex h-screen flex-col
`
const Container = tw.div`
flex flex-1 flex-col
`
const ConfirmContainer = tw.div`
bg-black text-white py-3 px-4 m-4 items-center text-xl text-center rounded cursor-pointer
`
