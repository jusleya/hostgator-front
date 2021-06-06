import styled, { css } from 'styled-components';
import { Text } from '../../structure';
// import media from 'styled-media-query';

export const Box = styled.div`
  min-width: 270px;
  margin-top: 38px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.auxiliary.white};
    border: 1px solid ${colors.auxiliary.gray};
  `}
`;

export const ContentBox = styled.div`
  padding: 33px 16px 26px 16px;
  ${({ theme: { colors }, noBorder }) => !noBorder &&
    css`
      border-bottom: 1px solid ${colors.auxiliary.gray};
    `}
  ${({ hasImg }) => hasImg &&
    css`
      text-align: center;
    `}
`;

export const Border = styled.div`
  width: max-content;
  ${({ theme: { colors } }) => css`
    border-bottom: 2px dashed ${colors.auxiliary.gray};
  `}
`;

export const SaleOff = styled(Text)`
  font-size: 14px;
  border-radius: 224px;
  padding: 2px 6px;
  text-transform: uppercase;
  ${({ theme: { colors } }) => css`
    color: ${colors.auxiliary.white};
    background-color: ${colors.auxiliary.green};
  `}
`;
