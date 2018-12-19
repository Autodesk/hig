import React from 'react';
import Button from '@hig/button';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

function ButtonsPage() {
  return (
    <ThemeRepeater>{() => (
      <div>
        <Button title="Learn React" type="flat" />
        <Spacer spacing="l" />
        <Button title="Learn React" type="outline" />
        <Spacer spacing="l" />
        <Button title="Learn React" type="solid" />
        <Spacer spacing="l" />
        <Button title="Learn React" disabled type="flat" />
        <Spacer spacing="l" />
        <Button title="Learn React" disabled type="outline" />
        <Spacer spacing="l" />
        <Button title="Learn React" disabled type="solid" />
      </div>
    )}</ThemeRepeater>
  );
}

export default ButtonsPage;
