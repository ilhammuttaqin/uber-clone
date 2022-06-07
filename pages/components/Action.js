import tw from "tailwind-styled-components"
import Link from "next/Link"

const Action = () => {
  return (
    <ActionItems>
      <Header>
        <UberLogo src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1542351809/laxjwpjbasdmwr6r199a.png"></UberLogo>
        <Profile>
          <Nama>Ilham Muttaqin</Nama>
          <UserImg src="https://raw.githubusercontent.com/ilhammuttaqin/pythoncok/main/Screenshot_20210911-193222_2.png" />
        </Profile>
      </Header>
      <ActionButtons>
        <Link href= "/Search">
        <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
          Ride
        </ActionButton>
        </Link>
        <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png" />
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
          Reserve
        </ActionButton>
      </ActionButtons>
      <InputButton>Where to ?</InputButton>
    </ActionItems>
  );
};

export default Action;

const ActionItems = tw.div`
  flex-1 p-5
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-20
`
const Profile= tw.div`
  flex items-center
`
const Nama= tw.div`
  mr-6 w-30 text-base font-medium
`
const UserImg= tw.img`
  h-14 w-14 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
  flex
`
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
  transform cursor-pointer hover:scale-105 transition
`
const ActionButtonImg = tw.img`
  h-3/5
`
const InputButton= tw.div`
  h-20 bg-gray-200 rounded-lg text-xl p-4 flex items-center
  mt-7
`