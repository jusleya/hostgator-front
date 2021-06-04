import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.section`
  grid-area: banner;
  padding: 32.5px 15px 36px 15px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue.dark};
  `}
  ${media.between('640px', '1024px')`
      padding: 32.5px 25px 36px 25px;
  `}
`;
