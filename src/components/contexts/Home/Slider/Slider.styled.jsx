import styled from 'styled-components';
import media from 'styled-media-query';
import { Flex } from '../../../structure';

export const SliderBox = styled(Flex)`
  width: 290px;
  overflow-x: scroll;
  ${media.between('640px', '1024px')`
    width: 600px;
  `}
  ${media.greaterThan('1024px')`
    width: 980px;
  `}
  ${media.greaterThan('1100px')`
    width: auto;
  `}
`;
