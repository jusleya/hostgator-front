// prettier-ignore
import styled, { css } from 'styled-components';
// import media from 'styled-media-query';

export const PaymentOptions = styled.div`
  width: 290px;
  display: flex;
  margin: 7px auto;
  padding: 11px 12px;
  border-radius: 21px;
  flex-direction: row;
  box-shadow: 0px 2px 4px #4480c570;
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.blue.dark};
    background-color: ${colors.auxiliary.white};
  `}
`;

export const OptionContainer = styled.label`
  display: flex;
  color: black;
  font-size: 16px;
  cursor: pointer;
  span {
    display: block;
  }
  ${({ noMargin }) => !noMargin &&
    css`
      margin-right: 15px;
    `}
  ${({ theme, isChecked, noMargin }) => isChecked && !noMargin
      ? css`
          border-radius: 21px;
          padding: 12px 12px 10px 10px;
          margin: -12px 2px -11px -12px;
          background-color: ${theme.colors.blue.dark};
        `
      : isChecked &&
        css`
          border-radius: 21px;
          padding: 12px 14px 10px 9px;
          margin: -12px -13px -11px -9px;
          background-color: ${theme.colors.blue.dark};
        `}
`;

export const Option = styled.input`
  all: unset;
  height: 18px;
  min-width: 18px;
  border-radius: 50%;
  margin-bottom: 2px;
  margin-right: 10px;
  display: inline-block;
  transition: all 150ms;
  vertical-align: middle;
  ${({ theme: { colors } }) => css`
    border: 2px solid ${colors.blue.default};
  `}
  :checked {
    ${({ theme: { colors } }) => css`
      border-color: ${colors.auxiliary.white};
      background: radial-gradient(#fff 50%, rgba(0, 0, 0, 0) 51%);
    `}
  :checked+span {
    ${({ theme: { colors } }) => css`
      color: ${colors.auxiliary.white};
      background-color: ${colors.blue.dark};
    `}
  }
`;
