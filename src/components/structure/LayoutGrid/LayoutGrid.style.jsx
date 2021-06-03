import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  ${media.lessThan('320px')`
    grid-template-areas: 'navbar' 'banner' 'main';
    grid-template-rows: 52px 320px auto;
  `}
`;

export const Navbar = styled.section`
  grid-area: navbar;
  background-color: #fff;
`;

export const Banner = styled.section`
  grid-area: banner;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
`;
