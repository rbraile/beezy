import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid #ddd;
  background: #094d8c;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-right: 20px;

  h1 {
    color: #fff;
    font-size: 24px;
    height: 105px;
    line-height: 105px;
    padding-left: 20px;
  }
`;

export const Logo = styled.a`
  display: block;
  width: 338px;
  height: 105px;
`;
