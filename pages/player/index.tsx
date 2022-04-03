import type { NextPage } from 'next'
import Page from '../../components/Page/Default'
import ScorllAnimationContainer from '../../components/ScorllAnimationContainer'
import DotComponent from '../../components/Dot'

const Player: NextPage = () => {
  return (
    <Page background="white">
      <DotComponent />
      <ScorllAnimationContainer></ScorllAnimationContainer>
    </Page>
  )
}

export default Player
