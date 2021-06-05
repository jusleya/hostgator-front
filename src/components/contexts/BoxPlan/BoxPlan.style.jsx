import styled, { css } from 'styled-components';
// import media from 'styled-media-query';

export const Box = styled.div`
  min-width: 270px;
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
`;

export const Border = styled.div`
  width: max-content;
  ${({ theme: { colors } }) => css`
    border-bottom: 2px dashed ${colors.auxiliary.gray};
  `}
`;
