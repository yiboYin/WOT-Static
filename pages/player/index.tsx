import type { NextPage } from 'next'
import Page from '../../components/Page/Default'
import ScorllAnimationContainer from '../../components/ScorllAnimationContainer'
import DotComponent from '../../components/Dot'
import { PageServerSideProps, generateCommonGetServerSideProps } from '../../redux/commonGetServerSideProps'
import { loadPlayer } from '../../redux/actions'

const Player: NextPage = () => {
  return (
    <Page background="white">
      <DotComponent />
      <ScorllAnimationContainer></ScorllAnimationContainer>
    </Page>
  )
}

const updatePlayerData = async ({ store, context: { req } }: PageServerSideProps) => {
  store.dispatch(loadPlayer(req))
}

export const getServerSideProps = generateCommonGetServerSideProps(updatePlayerData)

export default Player
