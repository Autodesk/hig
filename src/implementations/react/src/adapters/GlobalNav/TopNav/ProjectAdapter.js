import * as PropTypes from 'prop-types';
import HIGElement from '../../../elements/HIGElement';
import createComponent from '../../createComponent';

export class ProjectAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  componentDidMount() {
    if (this.initialProps.active) {
      this.hig.activate();
    } else {
      this.hig.deactivate();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'active': {
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;
        }
        case 'image': {
          this.hig.setImage(propValue);
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
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
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const ProjectComponent = createComponent(ProjectAdapter);

ProjectComponent.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

ProjectComponent.__docgenInfo = {
  props: {
    label: {
      description: 'sets {String} the label displayed for a project in project/account switcher'
    },
    image: {
      description: 'sets {String} the image displayed for a project in project/account switcher'
    },
    active: {
      description: '{func} activates the project'
    },
    onClick: {
      description: '{func} calls the provided callback when user clicks on the project'
    }
  }
};

export default ProjectComponent;
