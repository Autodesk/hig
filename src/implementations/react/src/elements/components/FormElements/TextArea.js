import PropTypes from 'prop-types';
import TextAreaAdapter
  from '../../../adapters/FormElements/TextAreaAdapter.js';
import controlled from '../../ControlledField';

const TextArea = controlled(TextAreaAdapter);

TextArea.propTypes = {
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string
}

TextArea.__docgeninfo = {
  disabled: {
    description: 'disable the field, preventing user interaction'
  },
  initialValue: {
    description: 'initial value of the field'
  },
  instructions: {
    description: 'a short description or suggestion'
  },
  label: {
    description: 'describes what the field controls'
  },
  name: {
    description: 'set on the element\'s name attribute'
  },
  onBlur: {
    description: 'called when user moves focus away from the field'
  },
  onChange: {
    description: 'called when user enters a new value and moves focus away from the field'
  },
  onFocus: {
    description: 'called when user moves focus onto the field'
  },
  onInput: {
    description: 'called when user enters a new value'
  },
  placeholder: {
    description: 'data entry suggestions or formatting examples'
  },
  required: {
    description: 'indicates a field must be filled before the form may be completed'
  },
  value: {
    description: 'controlled value of the field'
  }
}

export default TextArea;
