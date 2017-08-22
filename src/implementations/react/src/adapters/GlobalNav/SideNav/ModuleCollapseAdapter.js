
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import * as HIG from 'hig-vanilla';

const HIGModuleCollapse = HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module._partials.Collapse;

export class ModuleCollapseAdapter extends HIGElement {
  constructor(props) {
    super(HIGModuleCollapse, props);
  }

  componentDidMount() {
    if (this.props.hidden !== undefined) {
      this.commitUpdate(['hidden', this.props.hidden]);
    }
    if (this.props.minimized !== undefined) {
      this.commitUpdate(['minimized', this.props.minimized]);
    }
    if (this.props.onClick !== undefined) {
      this.commitUpdate(['onClick', this.props.onClick]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'hidden':
          propValue ? this.hig.hide() : this.hig.show();
          break;
        case 'minimized':
          propValue ? this.hig.minimize() : this.hig.maximize();
          break;
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClickDispose',
            this.hig.onClick(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const ModuleCollapseComponent = createComponent(ModuleCollapseAdapter);

ModuleCollapseComponent.propTypes = {
  hidden: PropTypes.bool,
  minimized: PropTypes.bool,
  onClick: PropTypes.func
};

ModuleCollapseComponent.__docgenInfo = {
  props: {
    hidden: {
      description: 'hide the collapse'
    },
    minimized: {
      description: 'designate that collapse is in the minimized state'
    },
    onClick: {
      description: 'triggered when icon is clicked on'
    }
  }
};

export default ModuleCollapseComponent;
