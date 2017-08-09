

import * as ReactHIG from './react-hig';

import Button from './elements/basics/Button';
import GlobalNav from './adapters/GlobalNav/GlobalNavAdapter';

describe('react-hig', () => {
  it('exports Button', () => {
    expect(Button).toEqual(ReactHIG.Button);
  });

  it('exports GlobalNav', () => {
    expect(GlobalNav).toEqual(ReactHIG.GlobalNav);
  });
});
