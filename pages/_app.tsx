import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import store from '../src/redux/index';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
