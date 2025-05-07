import '../../styles/globals.scss' // importa os estilos globais

import {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
    }

export default MyApp;