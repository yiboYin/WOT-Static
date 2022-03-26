import '../styles/globals.css'
import _ from 'lodash'
import type { AppProps } from 'next/app'
import { connect } from 'react-redux'
import { IReduxState } from '../redux/types'
import { wrapper } from '../redux/store'
import { initApp } from '../redux/actions'
import { PUBLIC_KEY, RSA_STORE } from '../constants/session'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  try {
    let pageProps: any = {}
    if (ctx.req) {
      store.dispatch(
        initApp({
          rsaPublicKey: _.get(ctx.req.session, `${RSA_STORE}.${PUBLIC_KEY}`)
        })
      )
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
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
