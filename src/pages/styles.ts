import styled from 'styled-components'
import { Container } from '../components/Container'

export const HomeContainer = styled(Container)`
  main {
    ul {
      list-style-type: none;
    }

    @media (max-width: 768px) {
      margin-bottom: 4rem;
    }
  }

  .clouds {
    margin-bottom: -5px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .emptyState {
    display: block;
    width: 270px;
    margin: 24px auto;
    text-align: center;
  }
`

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.highlight};
    font-weight: bold;
    font-size: 18px;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`
export const LoadMoreButton = styled.button`
  display: block;

  width: 200px;
  background: transparent;
  border: none;

  z-index: 999;

  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.highlight};
  font-weight: bold;
  font-size: 18px;
`
