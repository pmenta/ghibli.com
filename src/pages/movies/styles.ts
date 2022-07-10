import styled from 'styled-components'
import { Container } from 'src/components/Container'

export const MovieContainer = styled(Container)`
  .charactersContainer {
    h2 {
      font-weight: 700;
      font-size: 22px;
      margin-top: 37px;
      margin-bottom: 12px;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style-type: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 160px;
        height: 160px;

        padding: 0.75rem;
        border-radius: 13px;

        background: ${({ theme }) => theme.colors.cardBackground};
        text-align: center;

        margin-bottom: 12px;

        &:first-child {
          margin-right: 20px;
        }

        & + li {
          margin-right: 20px;
        }
      }
    }
  }
`
