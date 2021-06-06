import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.section`
  display: grid;
  grid-area: banner;
  padding: 32.5px 0 36px 0;
  grid-template-areas: '. content .';
  grid-template-columns: 15px auto 15px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.darkest};
  `}
  ${media.between('640px', '1024px')`
    grid-template-columns: 27px auto 27px;
  `}
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  margin: 36px auto;
  border-radius: 50%;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
  svg {
    margin: -6px -8px;
  }
`;
