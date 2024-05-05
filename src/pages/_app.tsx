import type { AppProps } from "next/app";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import "@/styles/globals.css";

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
    // If page layout is available, use it. Else return the page
    // @ts-ignore
    const getLayout = Component?.getLayout || ((page: JSX.Element) => page);

    return <MantineProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)};
        </MantineProvider>
}
