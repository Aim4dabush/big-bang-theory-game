import styled from "styled-components";

export const PlayAgainButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 600;
  padding: 15px 60px;
`;

const SelectionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
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

export const Scissors = styled(SelectionButton)`
  border: 34px solid ${({ theme }) => theme.colors.scissorBorder};
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ theme }) => theme.colors.scissorShadow};
  left: 45%;
  position: absolute;
  top: -25%;
`;

export const Spock = styled(SelectionButton)`
  border: 34px solid ${({ theme }) => theme.colors.spockBorder};
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ theme }) => theme.colors.spockShadow};
  left: 33%;
  position: absolute;
  top: 12%;
`;

export const Paper = styled(SelectionButton)`
  border: 34px solid ${({ theme }) => theme.colors.paperBorder};
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ theme }) => theme.colors.paperShadow};
  left: 57%;
  position: absolute;
  top: 12%;
`;

export const Lizard = styled(SelectionButton)`
  border: 34px solid ${({ theme }) => theme.colors.lizardBorder};
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ theme }) => theme.colors.lizardShadow};
  left: 37%;
  position: absolute;
  top: 70%;
`;

export const Rock = styled(SelectionButton)`
  border: 34px solid ${({ theme }) => theme.colors.rockBorder};
  box-shadow: 0px 8px 1px ${({ theme }) => theme.colors.shadow} inset,
    0px 8px 1px ${({ theme }) => theme.colors.rockShadow};
  left: 53%;
  position: absolute;
  top: 70%;
`;
