import styled from 'styled-components'

import { colors } from '@/constants/color'

export default styled.div`
  float: left;
  perspective: 500px;
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 25px;

  .content {
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  // &:hover {
  //   .content {
  //     transform: rotateY(180deg);
  //     transition: transform 0.5s;
  //   }
  // }

  .front-content,
  .flip-content {
    margin-top: 25px;
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    pointer-events: none;
  }
  .front-content {
    font-size: 60px;
  }

  .flip-content {
    font-size: 16px;
    transform: rotateY(180deg);
  }
`
