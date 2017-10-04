import * as ReactHIG from './hig-react';

import Button from './adapters/NewButtonAdapter';
import GlobalNav from './elements/components/GlobalNav/GlobalNav';

describe('hig-react', () => {
  it('exports Button', () => {
    expect(Button).toEqual(ReactHIG.Button);
  });

  it('exports GlobalNav', () => {
    expect(GlobalNav).toEqual(ReactHIG.GlobalNav);
  });
});
