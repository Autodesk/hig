import React from 'react';
import Button from '@hig/button';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';
import ThemeTitle from '../components/ThemeTitle';
import Surface from '../components/Surface';

function ButtonsPage() {
  return (
    <ThemeRepeater>
      <Surface>
        <ThemeTitle />
        <div style={{ display: "flex" }}>
          <Button title="Learn React" type="flat" />
          <Spacer />
          <Button title="Learn React" type="outline" />
          <Spacer />
          <Button title="Learn React" type="solid" />
          <Spacer />
          <Button title="Learn React" disabled type="flat" />
          <Spacer />
          <Button title="Learn React" disabled type="outline" />
          <Spacer />
          <Button title="Learn React" disabled type="solid" />
        </div>
      </Surface>
    </ThemeRepeater>
  );
}

export default ButtonsPage;
