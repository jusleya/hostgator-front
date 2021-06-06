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
  ${media.greaterThan('1025px')`
    grid-template-areas: 'img1 content img2';
    grid-template-columns: 270px auto 290px;
  `}
`;

export const ImageLeft = styled.div`
  display: none;
  grid-area: img1;
  svg {
    width: 375px;
    margin-top: 34px;
  }
  
  ${media.greaterThan('1025px')`
    display: block;
  `}
`;

export const ImageRight = styled.div`
  display: none;
  grid-area: img2;
  svg {
    width: 280px;
    margin-top: 58px;
  }
  
  ${media.greaterThan('1025px')`
    display: block;
  `}
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  margin: 42px auto;
  border-radius: 50%;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
  svg {
    margin: -6px -8px;
  }
  ${media.between('640px', '1023px')`
    margin: 140px auto;
  `}
  ${media.greaterThan('1024px')`
    margin: 120px auto;
  `}
`;
