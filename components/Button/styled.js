import styled from 'styled-components';

export const ButtonStyle = styled.a`
  cursor: pointer;
  background: ${props => (props.bg ? props.bg : '#2d72e1')};
  color: #fff;
  border-radius: 5px;
  padding: ${props => (props.padding ? props.padding : '10px 20px')};
  margin-right: 5px;
  width: ${props => (props.width ? props.width : 'auto')};
  
  svg {
    margin-right: 4px;
  }
`;