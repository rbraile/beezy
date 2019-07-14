import styled from 'styled-components';

export const TextField = styled.input`
  border-radius: 5px;
  font-size: 16px;
  height: 34px;
  width:  ${props => props.size ? '100px' : '250px'}  
  ${props => props.type === 'checkbox' && `
    margin-top: 5px;
  `}  
`;

export const ContainerArea = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    font-size: 16px;
  }
`;

export const Error = styled.p`
  color: red;
`;

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
`;


