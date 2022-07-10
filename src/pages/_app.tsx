import type { AppProps } from 'next/app'

import FavoritesProvider from 'src/context/favoritesContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </FavoritesProvider>
    </>
  )
}

export default MyApp
