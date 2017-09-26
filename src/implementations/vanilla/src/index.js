const Hig = {};

Hig.Avatar = require('./components/avatar/avatar.js');
Hig.breakpoints = require('./basics/responsive/responsive');
Hig.Button = require('./components/button/button.js');
Hig.colors = require('./basics/colors/colors.js');
Hig.Checkbox = require('./basics/form-elements/checkbox/checkbox.js');
Hig.Dropdown = require('./basics/form-elements/dropdown/dropdown.js');
Hig.FormElements = require('./basics/form-elements/form-elements.js');
Hig.Flyout = require('./basics/flyout/flyout.js');
Hig.GlobalNav = require('./components/global-nav/global-nav.js');
Hig.IconButton = require('./components/icon-button/icon-button.js');
Hig.Icon = require('./basics/icon/icon.js');
Hig.Icons = require('./basics/icons/icons.js');
Hig.InputButton = require('./basics/form-elements/input-button/input-button.js');
Hig.Modal = require('./components/modal/modal.js');
Hig.Option = require('./basics/form-elements/dropdown/option/option.js');
Hig.PasswordField = require('./basics/form-elements/password-field/password-field.js');
Hig.RadioButton = require('./basics/form-elements/radio-button/radio-button.js');
Hig.Range = require('./basics/form-elements/range/range.js');
Hig.RichText = require('./basics/rich-text/rich-text.js');
Hig.Table = require('./components/table/table.js');
Hig.TextCellContent = require('./components/table/table-row/text-cell-content/text-cell-content.js')
Hig.TextArea = require('./basics/form-elements/text-area/text-area.js');
Hig.TextField = require('./basics/form-elements/text-field/text-field.js');
Hig.TextLink = require('./basics/text-link/text-link.js');
Hig.Typography = require('./basics/typography/typography.js');
Hig.Spacer = require('./basics/spacer/spacer.js');
Hig.SlotHeadCell = require('./components/table/table-head/slot-head-cell/slot-head-cell.js');
Hig.Grid = require('./basics/grid/grid.js');

Hig.sizes = Hig.Spacer.SizeMap;

module.exports = Hig;
