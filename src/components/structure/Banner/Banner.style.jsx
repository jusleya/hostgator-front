import styled, { css } from 'styled-components';

export const Banner = styled.section`
  grid-area: banner;
  padding: 32.5px 15px 36px 15px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme, lineHeight }) => css`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.6px;
    line-height: ${lineHeight};
    color: ${theme.colors.blue.light};
  `}
`;
