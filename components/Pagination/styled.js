import styled from 'styled-components'

export const PaginationContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PaginationItemDisabled = styled.span`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
`

export const PaginationItem = styled.a`
  padding: 8px 16px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #094d8c;
    color: white;
  }
`
