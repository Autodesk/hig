const Hig = {};
require('./basics/container/container.js');

Hig.Avatar = require('./components/avatar/avatar.js');
Hig.Button = require('./components/button/button.js');
Hig.Checkbox = require('./basics/form-elements/checkbox/checkbox.js');
Hig.Dropdown = require('./basics/form-elements/dropdown/dropdown.js');
Hig.Flyout = require('./basics/flyout/flyout.js');
Hig.FormElements = require('./basics/form-elements/form-elements.js');
Hig.GlobalNav = require('./components/global-nav/global-nav.js');
Hig.Grid = require('./basics/grid/grid.js');
Hig.Icon = require('./basics/icon/icon.js');
Hig.IconButton = require('./components/icon-button/icon-button.js');
Hig.Icons = require('./basics/icons/icons.js');
Hig.InputButton = require('./basics/form-elements/input-button/input-button.js');
Hig.ProgressBar = require('./components/progress-bar/progress-bar');
Hig.ProgressRing = require('./components/progress-ring/progress-ring');
Hig.Modal = require('./components/modal/modal.js');
Hig.Option = require('./basics/form-elements/dropdown/option/option.js');
Hig.PasswordField = require('./basics/form-elements/password-field/password-field.js');
Hig.RadioButton = require('./basics/form-elements/radio-button/radio-button.js');
Hig.Range = require('./basics/form-elements/range/range.js');
Hig.RichText = require('./basics/rich-text/rich-text.js');
Hig.SlotHeadCell = require('./components/table/table-head/slot-head-cell/slot-head-cell.js');
Hig.Spacer = require('./basics/spacer/spacer.js');
Hig.Table = require('./components/table/table.js');
Hig.Tabs = require('./components/tabs/tabs.js');
Hig.Tab = require('./components/tabs/tab/tab.js');
Hig.TextArea = require('./basics/form-elements/text-area/text-area.js');
Hig.TextCellContent = require(
  './components/table/table-row/text-cell-content/text-cell-content.js'
);
Hig.TextField = require('./basics/form-elements/text-field/text-field.js');
Hig.TextLink = require('./basics/text-link/text-link.js');
Hig.Tooltip = require('./basics/tooltip/tooltip.js');
Hig.Typography = require('./basics/typography/typography.js');
Hig.breakpoints = require('./basics/responsive/responsive');
Hig.colors = require('./basics/colors/colors.js');

Hig.sizes = Hig.Spacer.SizeMap;

module.exports = Hig;
