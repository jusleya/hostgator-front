/* eslint-disable */
import styled, { css } from 'styled-components';

export const Flex = styled.div.attrs(
  ({
    width,
    height,
    padding,
    flexWrap,
    direction,
    marginTop,
    alignItems,
    marginLeft,
    marginRight,
    marginBottom,
    spaceBetween,
    justifyContent,
  }) => ({
    padding: padding ?? 0,
    width: width ?? 'unset',
    height: height ?? 'unset',
    direction: direction ?? 'row',
    flexWrap: flexWrap ?? 'unset',
    marginBottom: marginBottom ?? 0,
    spaceBetween: spaceBetween ?? 0,
    marginTop: marginTop ?? 'unset',
    marginLeft: marginLeft ?? 'unset',
    marginRight: marginRight ?? 'unset',
    alignItems: alignItems ?? 'flex-start',
    justifyContent: justifyContent ?? 'flex-start',
  }),
)`
  display: flex;
  max-height: 100%;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin-top: ${({ marginTop }) => marginTop};
  align-items: ${({ alignItems }) => alignItems};
  margin-left: ${({ marginLeft }) => marginLeft};
  flex-direction: ${({ direction }) => direction};
  margin-right: ${({ marginRight }) => marginRight};
  ${({ margin }) => margin && `margin: ${margin};`};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ spaceBetween, direction }) =>
    direction === 'column'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-bottom: ${spaceBetween};
          }
        `
      : direction === 'row-reverse'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-left: ${spaceBetween};
          }
        `
      : direction === 'column-reverse'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-top: ${spaceBetween};
          }
        `
      : css`
          > :nth-child(n):not(:last-child) {
            margin-right: ${spaceBetween};
          }
        `}
`;
