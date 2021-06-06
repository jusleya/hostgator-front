import React from 'react';
import { useIntl } from 'react-intl';
import { Flex, Title, Subtitle } from '..';
import { IcCheck, IcArrowBottom } from '../../../assets/icons';
import { Banner1, Banner2 } from '../../../assets/images';

import * as S from './Banner.style';

const Banner = () => {
  const { formatMessage } = useIntl();
  return (
    <S.Banner>
      <S.ImageLeft>
        <Banner1 />
      </S.ImageLeft>
      <S.Content>
        <Subtitle letteSpacing="1.6px">
          {formatMessage({ id: 'banner.subtitle' })}
        </Subtitle>
        <Title mb="33px" mt="12px" modifiers={['center']}>
          {formatMessage({ id: 'banner.title' })}
        </Title>
        <Flex direction="column" spaceBetween="7px" alignItems="center">
          <Flex spaceBetween="5px">
            <IcCheck width="15px" />
            <Subtitle lineHeight="20px" fontWeigth="normal">
              {formatMessage({ id: 'banner.advantage.available' })}
            </Subtitle>
          </Flex>
          <Flex justifyContent="center" spaceBetween="9px" flexWrap="wrap">
            <Flex spaceBetween="5px">
              <IcCheck width="15px" />
              <Subtitle lineHeight="20px" fontWeigth="normal">
                {formatMessage({ id: 'banner.advantage.support' })}
              </Subtitle>
            </Flex>
            <Flex spaceBetween="5px">
              <IcCheck width="15px" />
              <Subtitle lineHeight="20px" fontWeigth="normal">
                {formatMessage({ id: 'banner.advantage.controlPanel' })}
              </Subtitle>
            </Flex>
          </Flex>
        </Flex>
        <S.Circle>
          <IcArrowBottom />
        </S.Circle>
      </S.Content>
      <S.ImageRight>
        <Banner2 />
      </S.ImageRight>
    </S.Banner>
  );
};

export default Banner;
