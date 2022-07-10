import styled from 'styled-components'

export const MovieCardContainer = styled.li`
  display: flex;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 13px;
  margin-top: 8px;

  .banner {
    height: auto;
    border-radius: 13px 0 0 13px;

    object-fit: cover;

    @media (max-width: 426px) {
      width: auto;
      height: 164px;

      border-radius: 13px 13px 0 0;
    }
  }

  section {
    padding: 8px 16px;

    .titleContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a:hover {
        text-decoration: underline;
      }

      button {
        background: none;
        border: none;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    .subTitleContainer {
      display: flex;
      align-items: center;

      h2 {
        font-size: 14px;
        font-weight: 400;

        & + h2 {
          margin-left: 10px;
        }
      }
    }

    p {
      margin-top: 24px;
    }
  }

  & + & {
    margin-top: 24px;
  }

  @media (max-width: 426px) {
    min-width: 236px;
    flex-direction: column;
  }
`
