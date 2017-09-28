
//import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';

import HIGElement from '../../../elements/HIGElement';
import HIGChildValidator from '../../../elements/HIGChildValidator';
import createComponent from '../../createComponent';

import HIGNodeList from '../../../elements/HIGNodeList';
import ProjectAccountSwitcherComponent, {
  ProjectAccountSwitcherAdapter
} from './ProjectAccountSwitcherAdapter';
import ProjectAccountSwitcher from '../../../elements/components/GlobalNav/TopNav/ProjectAccountSwitcher';
import ProfileComponent, {
  ProfileAdapter
} from './ProfileAdapter';
import ShortcutAdapterComponent, { ShortcutAdapter } from './ShortcutAdapter';
import HelpComponent, { HelpAdapter } from './Help/HelpAdapter';
import SearchComponent, {
  SearchAdapter
} from './SearchAdapter';

export class TopNavAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.shortcuts = new HIGNodeList({
      ShortcutAdapter: {
        type: ShortcutAdapter,
        HIGConstructor: this.hig.partials.Shortcut,
        onAdd: (instance, beforeInstance) => {
          this.hig.addShortcut(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    // Add any children
    if (this.profile) {
      this.hig.addProfile(this.profile.hig);
      this.profile.mount();
    }

    if (this.projectAccountSwitcher) {
      this.hig.addProjectAccountSwitcher(this.projectAccountSwitcher.hig);
      this.projectAccountSwitcher.mount();
    }

    this.shortcuts.componentDidMount();

    if (this.help) {
      this.hig.addHelp(this.help.hig);
      this.help.mount();
    }

    if (this.search) {
      this.hig.addSearch(this.search.hig);
      this.search.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'children': {
          // No-op
          break;
        }
        case 'logo': {
          this.hig.setLogo(propValue);
          break;
        }
        case 'logoLink': {
          this.hig.setLogoLink(propValue);
          break;
        }
        case 'onLogoClick': {
          const dispose = this._disposeFunctions.get("onLogoClickDispose");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onLogoClickDispose",
            this.hig.onLogoClick(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case ProfileAdapter:
        return new ProfileAdapter(this.hig.partials.Profile, props);
      case ProjectAccountSwitcherAdapter:
        return new ProjectAccountSwitcherAdapter(
          this.hig.partials.ProjectAccountSwitcher,
          props
        );
      case HelpAdapter:
        return new HelpAdapter(this.hig.partials.Help, props);
      case ShortcutAdapter:
        return this.shortcuts.createElement(ElementConstructor, props);
      case SearchAdapter:
        return new SearchAdapter(this.hig.partials.Search, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    this.requireSingleInstance(instance);
    this.checkValidChild(instance);

    if (instance instanceof ShortcutAdapter) {
      this.shortcuts.insertBefore(instance);
    } else {
      this[this.getPropertyNameFor(instance)] = instance;
      if (this.mounted) {
        this.hig[this.getFunctionNameFor(instance)](instance.hig);
        instance.mount();
      }
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof ProfileAdapter) {
      this.profile = null;
    }

    instance.unmount();
  }

  requireSingleInstance(instance) {
    const requiredSingle = [
      'Profile',
      'ProjectAccountSwitcher',
      'HelpAdapter',
      'SearchAdapter'
    ];
    super.requireSingleInstance(instance, requiredSingle);
  }

  checkValidChild(instance) {
    const validInstances = [
      ProfileAdapter,
      ProjectAccountSwitcherAdapter,
      ShortcutAdapter,
      HelpAdapter,
      SearchAdapter
    ];
    if (!validInstances.includes(instance.constructor)) {
      throw new Error(
        `${instance.constructor.name} is not a valid child element of this parent.`
      );
    }
  }

  getPropertyNameFor(instance) {
    if (instance instanceof ProfileAdapter) {
      return 'profile';
    }
    if (instance instanceof ProjectAccountSwitcherAdapter) {
      return 'projectAccountSwitcher';
    }
    if (instance instanceof ShortcutAdapter) {
      return 'shortcut';
    }
    if (instance instanceof HelpAdapter) {
      return 'help';
    }
    if (instance instanceof SearchAdapter) {
      return 'search';
    }
    return null;
  }

  getFunctionNameFor(instance) {
    return 'add' + instance.constructor.name;
  }

  onHamburgerClick(callback) {
    this.hig.onHamburgerClick(callback);
  }
}

const TopNavAdapterComponent = createComponent(TopNavAdapter);

TopNavAdapterComponent.propTypes = {
  logo: PropTypes.string,
  logoLink: PropTypes.string,
  onLogoClick: PropTypes.func,
  onHamburgerClick: PropTypes.func,
  children: HIGChildValidator([
    ProfileComponent,
    ProjectAccountSwitcherComponent,
    ProjectAccountSwitcher,
    ShortcutAdapterComponent,
    HelpComponent,
    SearchComponent
  ])
};

TopNavAdapterComponent.__docgenInfo = {
  props: {
    logo: {
      description: 'sets the logo'
    },
    logoLink: {
      description: 'sets the link of the logo'
    },
    onHamburgerClick: {
      description: 'triggered when hamburger icon is clicked'
    },
    onLogoClick: {
      description: 'triggered when logo is clicked'
    }
  }
};

TopNavAdapterComponent.Profile = ProfileComponent;
TopNavAdapterComponent.Shortcut = ShortcutAdapterComponent;
TopNavAdapterComponent.Help = HelpComponent;
TopNavAdapterComponent.ProjectAccountSwitcher = ProjectAccountSwitcherComponent;
TopNavAdapterComponent.Search = SearchComponent;

export default TopNavAdapterComponent;
