import tw from "tailwind-styled-components"
import { carList } from "../carList"

const RideSelector = () => {
    return (
       <Wrapper>
           <Title>Please Choose a ride</Title>
           <CarList>
               { carList.map((car,index)=>(

                <Car key={index}>
                    <CarImg src={car.imgUrl}/>
                    <CarDetalis>
                        <Service>{car.service}</Service>
                        <TimeOrder>{car.timeOrder}</TimeOrder>
                    </CarDetalis>
                    <Price>Rp.5000</Price>
                </Car>
                 ))
                 }
           </CarList>
       </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 
`
const Title =tw.div`
text-center text-gray-500 font-medium text-xs py-2 border-b
`
const Car = tw.div`
flex p-4 bg-white items-center
`
const CarList =tw.div`
flex-1
`

const CarImg = tw.img`
h-14 mr-3
`
const CarDetalis = tw.div`
flex-1
`
const Service = tw.div`

`
const TimeOrder = tw.div`

`
const Price = tw.div`
`