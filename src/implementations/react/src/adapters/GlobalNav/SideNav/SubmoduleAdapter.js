
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';

export class SubmoduleAdapter extends HIGElement {
  componentDidMount() {
    this.commitUpdate(['title', this.props.title, 'link', this.props.link]);
    this.hig.show();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'active': {
          propValue ? this.hig.activate() : this.hig.deactivate();
          break;
        }
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue || '');
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
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const SubmoduleComponent = createComponent(SubmoduleAdapter);

SubmoduleComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

SubmoduleComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a submodule'
    },

    link: {
      description: 'sets the link of a submodule'
    },

    active: {
      description: 'activates the submodule'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    }
  }
};

export default SubmoduleComponent;
