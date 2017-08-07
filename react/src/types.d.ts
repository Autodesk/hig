import { storiesOf } from '@storybook/react';

declare module "@storybook/react" {
  interface Story {
    addWithInfo(storyName: string, info: any, storyFn: Function, _options?: any);
  }
}


