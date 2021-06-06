import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  blueDarkest: ({ theme }) => `
    color: ${theme.colors.blue.darkest};
  `,
  blueDark: ({ theme }) => `
    color: ${theme.colors.blue.dark};
  `,
  center: () => 'text-align: center;',
  bold: () => 'font-weight: bold',
  normal: () => 'font-weight: normal',
  lineDecoration: () => 'text-decoration: line-through;',
};

export const Text = styled.h4.attrs(
  ({
    size,
    lineHeight,
    textAlign,
    margin,
  }) => ({
    size: size ?? '13px',
    lineHeight: lineHeight ?? '19px',
    textAlign: textAlign ?? 'left',
    margin: margin ?? 0,
  }),
)`
  font-size: ${({ size }) => size};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};

  ${({ theme: { colors } }) => css`
    color: ${colors.auxiliary.black};
  `}
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export const Title = styled.h1.attrs(({ size, mb, mt }) => ({
  mb: mb ?? 0,
  mt: mt ?? 0,
  size: size ?? '24px',
}))`
  font-weight: bold;
  line-height: 32px;
  margin-top: ${({ mt }) => mt};
  font-size: ${({ size }) => size};
  margin-bottom: ${({ mb }) => mb};
  ${({ theme: { colors } }) => css`
    color: ${colors.auxiliary.white};
  `}

  ${applyStyleModifiers(MODIFIER_CONFIG)};
  
`;

export const Subtitle = styled.h3.attrs(
  ({
    width, lineHeight, fontWeigth, letteSpacing,
  }) => ({
    width: width ?? 'auto',
    fontWeigth: fontWeigth ?? 600,
    lineHeight: lineHeight ?? '27px',
    letteSpacing: letteSpacing ?? '0px',
  }),
)`
  font-size: 16px;
  text-align: center;
  width: ${({ width }) => width};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letteSpacing }) => letteSpacing};
  ${({ theme: { colors } }) => css`
    color: ${colors.blue.light};
  `}
`;
