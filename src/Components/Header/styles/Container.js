import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  display: flex;
  height: 150px;
  justify-content: space-between;
  margin-top: 48px;
  padding: 18px 24px 18px 36px;
  width: 700px;
`;

export const ScoreContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.offWhite},
    ${({ theme }) => theme.colors.white}
  );
  border-radius: 8px;
  display: flex;
  height: 114px;
  justify-content: center;
  width: 150px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 64px;
      font-weight: 700;
      margin: 0;
    }

    h3 {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 16px;
      font-weight: 600px;
      margin: 0;
      text-transform: uppercase;
    }
  }
`;
