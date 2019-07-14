import styled, { keyframes } from 'styled-components'

export const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #000;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      background: blue;
      left: 6px;
      animation: ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      background: red;
      left: 6px;
      animation: ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      background: blue;
      left: 26px;
      animation: ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      background: red;
      left: 45px;
      animation: ellipsis3 0.6s infinite;
    }
  }

  @keyframes ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
  @keyframes ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`
