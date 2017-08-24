import * as ReactHIG from './react-hig';

import Button from './adapters/ButtonAdapter';
import GlobalNav from './elements/components/GlobalNav/GlobalNav';

describe('react-hig', () => {
  it('exports Button', () => {
    expect(Button).toEqual(ReactHIG.Button);
  });

  it('exports GlobalNav', () => {
    expect(GlobalNav).toEqual(ReactHIG.GlobalNav);
  });
});
