import styled from 'styled-components'

export const GeneralContainer = styled.main`
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0 auto;

  @media (min-width: 1170px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`

export const BackToTop = styled.a`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 18px;

  &:hover {
    background-color: #666;
  }
`
