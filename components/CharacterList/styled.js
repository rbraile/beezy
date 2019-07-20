import styled from 'styled-components'
import device from '../../utils/device'

export const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 74%;

  @media ${device.tablet} {
    width: 100%;
  }
`

export const CharacterSection = styled.section``

export const Container = styled.section`
  display: flex;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const Aside = styled.div`
  padding: 10px;
  background: #eee;
  width: 23%;

  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const TitlePage = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`
