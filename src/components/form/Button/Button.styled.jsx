import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 22px;
  min-width: 229px;
  font-weight: bold;
  line-height: 27px;
  padding: 9px 16px;
  text-align: center;
  border-radius: 26px;
  transition: all 0.3s linear;
  ${({ theme: { colors } }) => css`
    color: ${colors.auxiliary.white};
    background-color: ${colors.blue.dark};
  `}
  &:hover {
    ${({ theme: { colors } }) => css`
      background-color: ${colors.auxiliary.orange};
    `}
  }
`;
