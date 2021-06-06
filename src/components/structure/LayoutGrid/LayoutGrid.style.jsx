import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  width: 100vw;
  display: grid;
  height: 100vh;
  padding-bottom: 60px;
  grid-template-rows: 52px 380px auto;
  grid-template-areas: 'navbar' 'banner' 'main';
  ${media.between('640px', '1023px')`
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
    margin: 8px 0;
    grid-area: svg;
  }
  ${media.between('640px', '1024px')`
    grid-template-columns: 27px auto 27px;
  `}
  ${media.greaterThan('1100px')`
    grid-template-columns: 150px auto 150px;
  `}
`;

export const Main = styled.section`
  display: grid;
  grid-area: main;
  margin-top: 32px;
  grid-template-areas: '. content .';
  grid-template-columns: 15px auto 15px;
  div {
    grid-area: content;
  }
  ${media.between('640px', '1024px')`
    grid-template-columns: 27px auto 27px;
  `}

  ${media.greaterThan('1100px')`
    grid-template-columns: 150px auto 150px;
  `}
`;
