import * as styled from 'styled-components'

// O identificador styled está sendo usado para a integração com prettier
// O que não é possível usando somente o { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.body};
  }

  h1 {
    color: ${({ theme }) => theme.colors.title};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.subtitle};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`

export default GlobalStyle
