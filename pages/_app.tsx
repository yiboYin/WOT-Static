import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { connect } from 'react-redux'
import { IReduxState } from '../redux/types'
import { wrapper } from '../redux/store'
import { loadSecret } from '../redux/actions'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  try {
    let pageProps: any = {}
    if (ctx.req) {
      store.dispatch(loadSecret(ctx.req))
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps,
    }
  } catch (e) {
    return {
      pageProps: {},
      error: e
    }
  }
})

const connected = connect((state: IReduxState) => ({
  isPageLoading: false
}))

export default wrapper.withRedux(connected(MyApp))
