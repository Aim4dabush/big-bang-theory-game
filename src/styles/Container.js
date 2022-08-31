import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
