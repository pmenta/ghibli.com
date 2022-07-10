import styled from 'styled-components'

export const MovieCardContainer = styled.li`
  display: flex;
  border-radius: 13px;
  margin-top: 8px;

  .banner {
    height: auto;
    border-radius: 13px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      height: 200px;
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
          margin-left: 4px;
          &::before {
            content: ' • ';
          }
        }
      }

      @media (max-width: 525px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 12px;

        h2:first-child {
          margin-left: 4px;
          &::before {
            content: ' • ';
          }
        }
      }
    }

    .prodInfoContainer {
      display: flex;

      div {
        h3 {
          font-weight: 500;
          font-size: 16px;
        }

        span {
          font-weight: 400;
          font-size: 14px;
        }

        & + div {
          margin-left: 20px;
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

  @media (max-width: 768px) {
    min-width: 236px;
    flex-direction: column;
  }
`
