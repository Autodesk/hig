import './basics/container/container';
import Spacer from './basics/spacer/spacer';
import colorMap from './basics/colors/colors';

// Assigning values to a new object
// ensures they are exported correctly in production
const sizes = { ...Spacer.SizeMap };
const colors = { ...colorMap };

export { default as ActionBar } from './components/action-bar/action-bar';
export { default as Avatar } from './components/avatar/avatar';
export { default as Button } from './components/button/button';
export { default as Checkbox } from './basics/form-elements/checkbox/checkbox';
export {
  default as ContainerView,
} from './basics/container-view/container-view';
export {
  default as ContainerViewContent,
} from './basics/container-view/container-view-content/container-view-content';
export {
  default as ContainerViewLeft,
} from './basics/container-view/container-view-left/container-view-left';
export {
  default as ContainerViewRight,
} from './basics/container-view/container-view-right/container-view-right';
export { default as Dropdown } from './basics/form-elements/dropdown/dropdown';
export {
  default as ExpandingFilterSection,
} from './components/expanding-filter-section/expanding-filter-section';
export { default as Flyout } from './basics/flyout/flyout';
export { default as FormElements } from './basics/form-elements/form-elements';
export { default as GlobalNav } from './components/global-nav/global-nav';
export { default as Grid } from './basics/grid/grid';
export { default as Icon } from './basics/icon/icon';
export { default as IconButton } from './components/icon-button/icon-button';
export { default as Icons } from './basics/icons/icons';
export { default as Image } from './basics/image/image';
export {
  default as InputButton,
} from './basics/form-elements/input-button/input-button';
export { default as ProgressBar } from './components/progress-bar/progress-bar';
export {
  default as ProgressRing,
} from './components/progress-ring/progress-ring';
export { default as Modal } from './components/modal/modal';
export { default as Option } from './basics/form-elements/option/option';
export {
  default as PasswordField,
} from './basics/form-elements/password-field/password-field';
export {
  default as RadioButton,
} from './basics/form-elements/radio-button/radio-button';
export { default as Range } from './basics/form-elements/range/range';
export { default as RichText } from './basics/rich-text/rich-text';
export {
  default as SectionLabel,
} from './components/section-label/section-label';
export {
  default as SlotHeadCell,
} from './components/table/table-head/slot-head-cell/slot-head-cell';
export { default as Spacer } from './basics/spacer/spacer';
export { default as Table } from './components/table/table';
export { default as Tabs } from './components/tabs/tabs';
export { default as Tab } from './components/tabs/tab/tab';
export {
  default as TextArea,
} from './basics/form-elements/text-area/text-area';
export {
  default as TextCellContent,
} from './components/table/table-row/text-cell-content/text-cell-content';
export {
  default as TextField,
} from './basics/form-elements/text-field/text-field';
export { default as TextLink } from './basics/text-link/text-link';
export { default as Timestamp } from './basics/timestamp/timestamp';
export { default as Tooltip } from './basics/tooltip/tooltip';
export { default as Typography } from './basics/typography/typography';

export { default as breakpoints } from './basics/responsive/responsive';
export { colors };
export { sizes };

export { default as i18next } from './helpers/js/i18n.js';
