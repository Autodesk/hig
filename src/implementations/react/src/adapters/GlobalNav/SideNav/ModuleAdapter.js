import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import HIGNodeList from '../../../elements/HIGNodeList';
import HIGChildValidator from '../../../elements/HIGChildValidator';
import SubmoduleAdapterComponent, {
  SubmoduleAdapter
} from './SubmoduleAdapter';
import ModuleCollapseAdapterComponent, {
  ModuleCollapseAdapter
} from './ModuleCollapseAdapter';
import Submodule from '../../../elements/components/GlobalNav/SideNav/Submodule';
import ModuleCollapse from '../../../elements/components/GlobalNav/SideNav/ModuleCollapse';

export class ModuleAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.submodules = new HIGNodeList({
      type: SubmoduleAdapter,
      HIGConstructor: this.hig.partials.Submodule,
      onAdd: (instance, beforeInstance) => {
        this.hig.addSubmodule(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.submodules.componentDidMount();

    if (this.collapse) {
      this.hig.addCollapse(this.collapse.hig);
      this.collapse.mount();
    }

    if (this.props.active !== undefined) {
      this.commitUpdate(['active', this.props.active]);
    }

    if (this.props.onClick !== undefined) {
      this.commitUpdate(['onClick', this.props.onClick]);
    }

    if (this.props.onHover !== undefined) {
      this.commitUpdate(['onHover', this.props.onHover]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'icon': {
          this.hig.setIcon(propValue);
          break;
        }
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
          break;
        }
        case 'active': {
          propValue ? this.hig.activate() : this.hig.deactivate();
          break;
        }
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
        case 'onHover': {
          const dispose = this._disposeFunctions.get('onHoverDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHoverDispose',
            this.hig.onHover(propValue)
          );
          break;
        }
        case 'children': {
          // No-op
          break;
        }
        default: {
          // No-op
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case SubmoduleAdapter:
        return this.submodules.createElement(ElementConstructor, props);
      case ModuleCollapseAdapter:
        return new ModuleCollapseAdapter(props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    if (instance instanceof SubmoduleAdapter) {
      this.submodules.insertBefore(instance, insertBeforeIndex);
    } else if (instance instanceof ModuleCollapseAdapter) {
      if (this.collapse) {
        throw new Error('only one ModuleCollapse is allowed');
      } else {
        this.collapse = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  appendChild(instance) {
    this.insertBefore(instance);
  }

  removeChild(instance) {
    if (instance instanceof SubmoduleAdapter) {
      this.submodules.removeChild(instance);
    }

    if (instance instanceof ModuleCollapseAdapter) {
      this.collapse = null;
      instance.unmount();
    }
  }
}

const ModuleComponent = createComponent(ModuleAdapter);

ModuleComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  children: HIGChildValidator([Submodule, ModuleCollapse, SubmoduleAdapterComponent, ModuleCollapseAdapterComponent])
};

ModuleComponent.__docgenInfo = {
  props: {
    icon: {
      description: 'sets the icon of an Module'
    },

    title: {
      description: 'sets the title of an Module'
    },

    link: {
      description: 'sets the link of an Module'
    },

    active: {
      description: '[Boolean] Designates that the module is active'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    },

    children: {
      description: 'supports adding SubModule and Collapse'
    }
  }
};

ModuleComponent.Submodule = SubmoduleAdapterComponent;
ModuleComponent.ModuleCollapse = ModuleCollapseAdapterComponent;

export default ModuleComponent;
