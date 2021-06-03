import styled from 'styled-components';

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
    justifyContent,
  }) => ({
    padding: padding ?? 0,
    width: width ?? 'unset',
    height: height ?? 'unset',
    direction: direction ?? 'row',
    flexWrap: flexWrap ?? 'unset',
    marginBottom: marginBottom ?? 0,
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
`;
