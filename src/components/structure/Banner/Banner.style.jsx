import styled, { css } from 'styled-components';

export const Banner = styled.section`
  grid-area: banner;
  padding: 32.5px 15px 36px 15px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
`;
