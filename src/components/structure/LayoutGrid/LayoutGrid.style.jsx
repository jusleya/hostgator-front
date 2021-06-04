import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 'navbar' 'banner' 'main';
  grid-template-rows: 52px 380px auto;
  ${media.between('640px', '1024px')`
    grid-template-rows: 52px 400px auto;
  `}
`;

export const Navbar = styled.section`
  display: grid;
  grid-area: navbar;
  grid-template-areas: '. svg .';
  grid-template-columns: 15px auto 15px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.auxiliary.white};
  `}
  svg {
    grid-area: svg;
    margin: 8px 0;
  }
  ${media.between('640px', '1024px')`
    grid-template-columns: 27px auto 27px;
  `}
  ${media.greaterThan('1024px')`
    grid-template-columns: 390px auto 390px;
  `}
`;
