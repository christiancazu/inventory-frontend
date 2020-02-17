import styled from 'styled-components';

// layouts
export const StyledCenterLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: #2C3E50;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* align verticaly the inmediate first child */
  & > div {
    margin: auto 0;
  }
`;

// components
export const StyledCardTitle = styled.span`
  display: flex;
  justify-content: center;
`;


export const SpinnerPage = styled.div`
  color: official;
  /* display: inline-block; */
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  & div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
