import styled from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 'navbar' 'banner' 'main';
  grid-template-rows: 52px 320px auto;
  ${media.greaterThan('640px')`
    grid-template-rows: 52px 400px auto;
  `}
`;

export const Navbar = styled.section`
  grid-area: navbar;
  padding: 8px 16px;
  background-color: #fff;
`;
