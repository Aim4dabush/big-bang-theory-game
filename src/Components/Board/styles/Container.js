import styled from "styled-components";

export const BoardContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const HouseChoiceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 34px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ shadowColor }) => shadowColor};
  color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1;

  div {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 111px;
    width: 111px;

    img {
      height: 70px;
      width: 70px;
    }
  }
`;

export const PlayAgainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    color: #ffffff;
    font-size: 56px;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

export const PlayerChoiceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 34px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ shadowColor }) => shadowColor};
  color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1;

  div {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 111px;
    width: 111px;

    img {
      height: 70px;
      width: 70px;
    }
  }
`;

export const PlayersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 0;
    text-transform: uppercase;
  }
`;

export const PlayerSelectionContainer = styled.div`
  height: 50%;
  position: absolute;
  width: 100%;
  top: 35%;
  z-index: 1;
`;

export const ResultsContainer = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-evenly;
  width: 50%;
`;
