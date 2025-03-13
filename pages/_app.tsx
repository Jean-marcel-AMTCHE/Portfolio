import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';    


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;


