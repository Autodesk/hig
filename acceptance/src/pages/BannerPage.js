import React from 'react';
import Banner from '@hig/banner';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

function BannerPage() {
  return (
    <ThemeRepeater>{() => (
      <div>
        <Banner type="primary">Primary</Banner>
        <Spacer spacing="l" />
        <Banner type="complete">Complete</Banner>
        <Spacer spacing="l" />
        <Banner type="warning">Warning</Banner>
        <Spacer spacing="l" />
        <Banner type="urgent">Urgent</Banner>
      </div>
    )}</ThemeRepeater>
  );
}

export default BannerPage;
