/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import * as PropTypes from 'prop-types';
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';
import HIGNodeList from '../../HIGNodeList';
import HIGChildValidator from '../../HIGChildValidator';
import SubmoduleComponent, { Submodule } from './Submodule';
import ModuleCollapseComponent, { ModuleCollapse } from './ModuleCollapse';

export class Module extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.submodules = new HIGNodeList({
      type: Submodule,
      HIGConstructor: this.hig.partials.Submodule,
      onAdd: (instance, beforeInstance) => {
        this.hig.addSubmodule(instance, beforeInstance);
      }
    });
    this.state = {
      title: initialProps.title,
      query: initialProps.query,
      collapsed: true,
    };

    ['toggleCollapsed', '_render', 'handleClick', 'setActiveSubmodule'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.processUpdateProps(updatePayload)
      .mapToHIGFunctions({
        icon: 'setIcon',
        title: 'setTitle',
        link: 'setLink'
      })
      .mapToHIGEventListeners(['onHover'])
      .handle('activeModule', value => {
        this === value ? this.activate() : this.deactivate()
      })
      .then(this._render);
  }

  toggleCollapsed() {
    this.state.collapsed = !this.state.collapsed;
    this._render();
  }

  componentDidMount() {
    this.hig.onClick(this.handleClick);

    this.submodules.componentDidMount();
    if (this.submodules.length > 0) {
      this.collapse = new ModuleCollapse(this.hig.partials.Collapse, {
        isCollapsed: this.state.collapsed
      });
      this.hig.addCollapse(this.collapse.hig);
      this.collapse.mount();
      this.collapse.hig.onClick(this.toggleCollapsed);
    }
    this._render();
  }

  createElement(ElementConstructor, props) {
    return this.submodules.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.submodules.insertBefore(instance, insertBeforeIndex);
    instance.onActiveSubmodule(this.setActiveSubmodule);
  }

  removeChild(instance) {
    this.submodules.removeChild(instance);
  }

  matches(query) {
    if (!query) {
      return true;
    }
    return this.props.title.toLowerCase().match(query.toLowerCase());
  }

  isVisible() {
    return this.state.isVisible;
  }

  dispatchModuleActivated(submodule){
    const moduleActivatedEvent = new CustomEvent('moduleActivated', {
      bubbles: true,
      detail: {
        activeModule: this,
        activeSubmodule: submodule 
      }
    });

    this.hig.el.dispatchEvent(moduleActivatedEvent);
  }

  setActiveSubmodule(submodule){
    this.dispatchModuleActivated(submodule);
  }

  handleClick() {
    this.submodules.forEach(submodule => {
      if (this.props.activeSubmodule === submodule) {
        this.dispatchModuleActivated(this.props.activeSubmodule);
        return true; 
      } else {
        this.dispatchModuleActivated(this.submodules.nodes[0]);
      }
    });  
  }

  activate(){
    this.hig.activate();
  }

  deactivate(){
    this.hig.deactivate();
  }

  showMatches(query) {
    const childMatches = this.submodules.map(submodule => {
      submodule.commitUpdate({
        query: query,
      });

      return submodule.isVisible();
    });

    if (childMatches.some(m => m)) {
      let collapsed = false
      this.showSelf(collapsed);
      // iterate over the matching children ?
    } else if (this.matches(query)){
      let collapsed = true;
      this.showSelf(collapsed);
    } else {
      this.hideSelf();
    }
  }

  expandAll() {
    this.showSelf(false)
    this.submodules.forEach(submodule => {
        submodule.show();
    })
  }

  collapseAll() {
    this.showSelf(true);
    this.submodules.forEach(submodule => {
        submodule.hide();
    });
  }

  hideSelf() {
    this.hig.hide();
    this.state.isVisible = false;
    // this.collapseAll();
  }

  // only about self (Module) visibility and collapse icon.
  // set children/submodule show/hide elsewhere
  showSelf(collapsed) {
    this.hig.show();
    this.state.isVisible = true;
    this.state.collapsed = collapsed;
    if (!this.collapse) { return; }
    this.collapse.commitUpdate(['isCollapsed', this.state.collapsed]);
  }

  _render() {
    if (this.props.query !== undefined && this.props.query.length === 0){
      this.collapseAll();
    } else if (this.props.query !== undefined ) {
      this.showMatches(this.props.query)
    } else {
      if (this.state.collapsed) {
        this.collapseAll()
      } else {
        this.expandAll(); 
      }
    }  


    this.submodules.forEach(submodule => {
      this.props.activeSubmodule === submodule ? submodule.activate() : submodule.deactivate();
    }); 
  }
}

const ModuleComponent = createComponent(Module);

ModuleComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  query: PropTypes.string,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  children: HIGChildValidator([SubmoduleComponent])
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

    show: {
      description: 'show (used for filtering)'
    },

    hide: {
      description: 'hide (used for filtering)'
    },

    active: {
      description: '[Boolean] Designates that the module is active'
    },

    collapsed: {
      description: '[Boolean] When false shows submodules, when true hides them'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    },

    children: {
      description: 'support adding SubModule'
    }
  }
};

ModuleComponent.Submodule = SubmoduleComponent;
ModuleComponent.ModuleCollapse = ModuleCollapseComponent;

export default ModuleComponent;
