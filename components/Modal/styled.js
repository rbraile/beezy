import styled, {keyframes} from 'styled-components';

const animateBack = keyframes`
  0%{
    opacity: 0
  }
  100%{
    opacity: 1
  }
`;
const animateBye = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
const animateScaleBye = keyframes`
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
`;

const animateContainer = keyframes`
  0%{
    transform: scale(0.5);
    opacity: 0;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalBack = styled.div`
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  animation: ${props => (props.mounted ? `${animateBack} 0.5s ease` : `${animateBye} 0.5s ease`)};
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  animation: ${props => (props.mounted ? `${animateContainer} 0.5s ease` : `${animateScaleBye} 0.5s ease`)};
  width: auto;
  min-height: 220px;
  flex-direction: column;
`;

export const ModalClose = styled.button`
  border: none;
  background: none;
  color: red;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 5px 10px;
  &:active, &:focus{
    outline: none;
  }
  &:after{
    content: '✕';
    font-size: 24px;
    color: red;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const BtnAcept = styled.a`
  background: red;
  color: #fff;
  padding: 10px;
  margin-right: 20px;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const BtnCancel = styled.a`
  background: green;
  color: #fff;
  padding: 10px;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`
