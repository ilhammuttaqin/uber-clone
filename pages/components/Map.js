import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FtYWRrZXJlbiIsImEiOiJja3ZuY3MxcTgxdGpmMnZtdDl5em9vMHl6In0.O9wiASiutTrlYm7KbvRm_g";

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.6417, -6.1813],
      zoom: 11,
    })
    if(props.coordinate){
      addToMap(map, props.coordinate);
    }
    if(props.dropCoordinate){
      addToMaps(map, props.dropCoordinate);
    }

    if(props.coordinate && props.dropCoordinate){
      map.fitBounds([
        props.dropCoordinate,
        props.coordinate
      ],{
        padding:60
      })
    }

  },[props.coordinate,props.dropCoordinate])

  const addToMap = (map,coordinates)=>{
    const marker1 = new mapboxgl.Marker({color:'#4682B4'})
    .setLngLat(coordinates)
    .addTo(map);
  }

  const addToMaps = (map,dropcordnate)=>{
    const marker1 = new mapboxgl.Marker({color:'#000000'})
    .setLngLat(dropcordnate)
    .addTo(map);
  }

  return <Maps id="map"></Maps>;
};

export default Map;

const Maps = tw.div`
  flex-1
`