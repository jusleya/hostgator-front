/* eslint-disable */
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, mt, mb }) => css`
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    margin-top: ${mt};
    text-align: center;
    margin-bottom: ${mb};
    color: ${theme.colors.auxiliary.white};
  `}
`;

export const Subtitle = styled.h3.attrs(
  ({ lineHeight, fontWeigth, letteSpacing, width }) => ({
    width: width ?? 'auto',
    fontWeigth: fontWeigth ?? 600,
    lineHeight: lineHeight ?? '27px',
    letteSpacing: letteSpacing ?? '0px',
  }),
)`
  ${({ theme }) => css`
    font-size: 16px;
    text-align: center;
    width: ${({ width }) => width};
    color: ${theme.colors.blue.light};
    font-weight: ${({ fontWeigth }) => fontWeigth};
    line-height: ${({ lineHeight }) => lineHeight};
    letter-spacing: ${({ letteSpacing }) => letteSpacing};
  `}
`;
