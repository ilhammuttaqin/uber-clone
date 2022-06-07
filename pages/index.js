import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Action from "./components/Action"

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <Action />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`