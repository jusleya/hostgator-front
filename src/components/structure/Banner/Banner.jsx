import React from 'react';
import { useIntl } from 'react-intl';

import * as S from './Banner.style';

const Banner = () => {
  const { formatMessage } = useIntl();
  return (
    <S.Banner>
      <S.SubTitle lineHeight="27px">
        {formatMessage({ id: 'banner.subtitle' })}
      </S.SubTitle>
    </S.Banner>
  );
};

export default Banner;
