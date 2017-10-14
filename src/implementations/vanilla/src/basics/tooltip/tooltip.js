import './tooltip.scss';

// const Template = require('./tooltip.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const Flyout = require('../flyout/flyout.js');

const ANCHOR_POINTS = [
  'top-center',
  'right-center',
  'bottom-center',
  'left-center'
];


/**
 * Creates an PasswordField
 *
 * @class
 */

class Tooltip extends Core {
  constructor(options) {
    super(options);
    this._render('<div></div>', options);
    this.initialOptions = options 
    this.flyout = new Flyout({type: 'tooltip'});
    
  }
    
  mount(mountEl){
    this.flyout.mount(mountEl);
  }

  open(){
    this.flyout.open();
  }

  close(){
    this.flyout.close();
  }

  onClickOutside(fn){
    return this.flyout.onClickOutside(fn)
  }

  addTarget(targetElement){
    this.flyout.addTarget(targetElement)
  }

  addContent(content) {
    const contentContainer = document.createElement('span');
    contentContainer.textContent = content;

    this.flyout.addSlot(contentContainer);
  }

  setAnchorPoint(anchorPoint) {
    if (!Tooltip.AvailableAnchorPoints.includes(anchorPoint)) {
      console.error(
        `Tooltip cannot have anchorPoint "${anchorPoint}". Only these inset anchorPoints are allowed: `,
        Tooltip.AvailableAnchorPoints
      );
      return;
    }
    this.flyout.setAnchorPoint(anchorPoint);
  }
}


Tooltip._interface = Interface.basics.Tooltip;

Tooltip._defaults = {
  anchorPoint: 'top-center'
}

Tooltip.AvailableAnchorPoints = ANCHOR_POINTS;

module.exports = Tooltip;