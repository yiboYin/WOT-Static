import { END } from 'redux-saga'
import { RootStore, wrapper as storeWrapper } from './store'
import { GetServerSidePropsContext } from 'next'

export const commonGetServerSidePropsEnd = async ({ store }: { store: RootStore }) => {
  store.dispatch(END)
  await store.sagaTask.toPromise()
}

export interface PageServerSideProps {
  store: RootStore
  context: GetServerSidePropsContext
}
type PageServerSideCallback = (props: PageServerSideProps) => Promise<any> | void

export const generateCommonGetServerSideProps = (pageServerSideCb?: PageServerSideCallback) =>
  storeWrapper.getServerSideProps((store) => async (context) => {
    let callbackProps
    if (pageServerSideCb) {
      callbackProps = await pageServerSideCb({ store, context })
    }
    await commonGetServerSidePropsEnd({ store })
    const props = {
      ...callbackProps
    }
    return { props }
  })
export const commonGetServerSideProps = generateCommonGetServerSideProps()
export default commonGetServerSideProps
