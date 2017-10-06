import PropTypes from 'prop-types';
import RangeAdapter
  from '../../../adapters/FormElements/NewRangeAdapter.js';
import controlled from '../../ControlledField';

const Range = controlled(RangeAdapter);

Range.propTypes = {
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  required: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Range.__docgeninfo = {
  props: {
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
    minValue: {
      description: 'minimum value for the range'
    },
    maxValue: {
      description: 'maximum value for the range'
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
    required: {
      description: 'indicates a field must be filled before the form may be completed'
    },
    step: {
      description: 'ammount of each step between min and max'
    },
    value: {
      description: 'controlled value of the field'
    }
  }
}

export default Range;
