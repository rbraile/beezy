import styled from 'styled-components'
import device from '../utils/device'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Annex = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`
