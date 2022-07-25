import styled from 'styled-components'

export default styled.div`
  .profile-card {
    top: 50vh;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    .link-wrapper {
      max-width: 280px;
      span {
        display: flex;
        justify-content: center;
        width: 24px;
      }
      a {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: calc(256px - 1.5rem);
      }
    }
  }
  @keyframes floating {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(calc(-50% - 5px));
    }
    100% {
      transform: translateY(calc(-50% - 0px));
    }
  }
`
