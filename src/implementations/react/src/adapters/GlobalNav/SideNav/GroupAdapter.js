import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import HIGNodeList from '../../../elements/HIGNodeList';
import HIGChildValidator from '../../../elements/HIGChildValidator';
import ModuleComponent, {
  ModuleAdapter
} from '../../../adapters/GlobalNav/SideNav/ModuleAdapter';
import Module from '../../../elements/components/GlobalNav/SideNav/Module';

export class GroupAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.modules = new HIGNodeList({
      Module: {
        type: Module,
        HIGConstructor: this.hig.partials.Module,
        onAdd: (instance, beforeInstance) => {
          this.hig.addModule(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.modules.componentDidMount();
  }

  createElement(ElementConstructor, props) {
    return this.modules.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.modules.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.modules.removeChild(instance);
  }
}

const GroupComponent = createComponent(GroupAdapter);

GroupComponent.propTypes = {
  children: HIGChildValidator([ModuleComponent, Module])
};

GroupComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Module'
    }
  }
};

GroupComponent.Module = ModuleComponent;

export default GroupComponent;
