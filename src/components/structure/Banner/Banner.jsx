import React from 'react';
import { useIntl } from 'react-intl';
import { Flex, Title, Subtitle } from '..';
import { IcCheck } from '../../../assets/icons';

import * as S from './Banner.style';

const Banner = () => {
  const { formatMessage } = useIntl();
  return (
    <S.Banner>
      <Subtitle letteSpacing="1.6px">
        {formatMessage({ id: 'banner.subtitle' })}
      </Subtitle>
      <Title mb="33px" mt="12px">
        {formatMessage({ id: 'banner.title' })}
      </Title>
      <Flex direction="column" marginBottom="7px" alignItems="center">
        <Flex marginRight="5px">
          <IcCheck width="15px" />
          <Subtitle lineHeight="20px" fontWeigth="normal">
            {formatMessage({ id: 'banner.advantage.available' })}
          </Subtitle>
        </Flex>
      </Flex>
    </S.Banner>
  );
};

export default Banner;
