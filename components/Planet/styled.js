import styled from 'styled-components'
import device from '../../utils/device'

export const Container = styled.div`
  width: 50%;
  border: 1px solid #f2f2f2;
  border-radius: 0 0 5px 5px;
  margin: 0 10px 20px 0;

  h2 {
    background: #f2f2f2;
    padding-left: 10px;
  }

  p {
    padding-left: 10px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`
