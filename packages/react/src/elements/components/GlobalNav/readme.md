# GlobalNav

## Navigation
- [Providing modules and submodules](#navigation-providing)
- [Grouping modules](#navigation-grouping)
- [Navigating to a new page when a module or submodule is selected](#navigation-link)
- [Navigating when the user selects a module or submodule](#navigation-on-click)
- [Controlling the active module or submodule](#navigation-controlling)

## Opening and closing the Sidenav
- [Opening the Sidenav by default](#side-nav-default)
- [Controlling open/close state of the Sidenav](#)

## Page content
- [Providing page content](#page-content)


## TopNav Props
- [Logo with link](#top-nav-logo-link)
- [Logo with click handler](#top-nav-on-click)

### ProjectAccountSwitcher
- [Providing projects and accounts](#pas-providing)
- [Knowing when the user selects a project or account](#pas-handle-change)
- [Controlling the active project and account](#pas-controlling)
- [Overriding labels for project and account in the flyout](#pas-labels)

### Help
- [Providing options with click handlers](#help-link)
- [Providing options with links](#help-on-click)

## SubNav Props
- [Showing the subnav](#sub-nav)


## SideNav Props
### Headers
- [Providing header labels](#side-nav-headers)
- [Header labels with links](#side-nav-header-links)
- [Header labels with click handlers](#side-nav-header-on-click)

### Links
- [Links with hrefs](#side-nav-links-links)
- [Links with click handlers](#side-nav-links-on-click)

### Copyright
- [Providing a copyright notice](#side-nav-copyright)

### Custom Sidenav content
- [Providing custom content to the Sidenav](#side-nav-slot)


---

### Navigation

#### Providing modules and submodules<a name="navigation-providing"></a>

Modules must have `id` and `title` props. `icon` is optional.

Submodules must also have an `id` and `title` prop
as well as a `moduleId` coresponding to a module's `id`.

```js
const modules = [
  { id: '1', title: 'First module', icon: 'settings' },
  { id: '2', title: 'Second module', icon: 'assets' },
]

const submodules = [
  { moduleId: '1', id: '1-1', title: 'Unit' }
  { moduleId: '1', id: '1-2', title: 'Unit' }
]

<GlobalNav
  modules={modules}
  submodules={submodules}
/>
```

#### Grouping modules<a name="navigation-grouping"></a>

Modules sharing a `groupId` prop will be visually grouped.

```js
const modules = [
  { groupId: 'a', id: '1', title: 'First module' },
  { groupId: 'a', id: '2', title: 'Second module' },
  { groupId: 'b', id: '3', title: 'Third module' },
]

<GlobalNav
  modules={modules}
/>
```

#### Navigating to a new page when a module or submodule is selected<a name="navigation-link"></a>

If a module or submodule should link to a different page,
you can provide a `link` property, which, when clicked,
will navigate the browser to that url.

```js
const modules = [
  { id: '1', title: 'First module', link: 'http://hig.autodesk.com' }
]

const submodules = [
  { moduleId: '1', id: '1-1', title: 'A Submodule', link: 'http://hig.autodesk.com' }
];

<GlobalNav modules={modules} submodules={submodules} />
```


#### Navigating when the user selects a module or submodule<a name="navigation-on-click"></a>

You may want to change some page content when a module is selected,
without reloading the entire page. In that case,
pass a callback function to `onModuleChange`.
When the user selects a module or submodule,
this callback will be called with the `id` of the selected module or submodule.

For example, if you were using React Router,
you may want to trigger navigation using that library rather than loading a new page.
You would configure your modules and submodules without the `link` prop,
and instead pass an `onModuleChange` prop.

```js
const modules = [
  { id: '1', title: 'First module' }
]

const submodules = [
  { moduleId: '1', id: '1-1', title: 'A Submodule' }
];

<GlobalNav
  onModuleChange={(activeModuleId) => { this.props.history.push('/' + activeModuleId) }}
  modules={modules}
  submodules={submodules}
/>
```

#### Controlling the active module or submodule<a name="navigation-controlling"></a>
If your app needs to set the active module,
pass the `id` of the active module or submodule to `activeModuleId`.
In this case you ust also provide a handler for `onModuleChange`.

```js
const modules = [
  { id: '1', title: 'First module' }
]

const submodules = [
  { moduleId: '1', id: '1-1', title: 'A Submodule' }
]

<GlobalNav
  activeModuleId={this.state.activeModuleId}
  onModuleChange={this.setActiveModuleId}
  modules={modules}
  submodules={submodules}
/>
```

## Opening and closing the SideNav

### Opening the Sidenav by default<a name="side-nav-default"></a>

By default the Sidenav is closed when the page loads.
If you want to have it open by default,
but otherwise don't need to control it,
pass `true` to `showSideNavByDefault`.

```js
<GlobalNav showSideNavByDefault={true} />
```

### Controlling open/close state of the Sidenav<a name="side-nav-controlled"></a>

By default, the Sidenav opens and closes
when the user clicks on the "hamburger" menu in the Topnav,
but you can take control of this behavior if you need to.
If your app needs to control when the Sidenav opens or closes,
set the `showSideNav` prop to `true` or `false`
and provide a handler to `onHamburgerClick`.

```js
<GlobalNav
  showSideNav={this.state.showSideNav}
  onHamburgerClick={this.toggleSideNav}
/>
```

## Rendering page content<a name="page-content"></a>

Elements defined between the opening and closing tags of the Globalnav
will appear as the many page content, below the Topnav and Subnav.

```js
<GlobalNav>
  <h1>Page content goes here</h1>
</GlobalNav>
```


## TopNav Props

### Logo with link<a name="top-nav-logo-link"></a>

Your app can display a logo in the Topnav.
Provide a url to your logo to the `logo` prop.
If clicking the logo should take you someplace,
provide a url to `logoLink`.

```js
<GlobalNav
  topNav={
    {
      logo: '/my-logo.png',
      logoLink: '/'
    }
  }
/>
```

### Logo with click handler<a name="top-nav-on-click"></a>

If your app handles navigation some other way, such as with React Router,
handle a logo click your own way using the `onLogoClick` prop.

```js
<GlobalNav
  topNav={{
    logo: '/my-logo.png',
    onLogoClick: () => { this.context.history.push('/') }
  }}
/>
```

### ProjectAccountSwitcher
#### Providing projects and accounts<a name="pas-providing"></a>

Configure the ProjectAccountSwitcher with a list, of `projects`, `accounts`, or both.
Projects and accounts all take the same props. They must have a `label` and an `id`.
`image` is optional.

```js
<GlobalNav
  topNav={{
    projectAccountSwitcher: {
      projects: [
        { label: 'General Hospital', image: '/project-image.png', id: 'p1' }
      ],
      accounts: [
        { label: 'Global Construction', image: '/account-image.png', id: 'a1' }
      ]
    }
  }}
/>
```

#### Knowing when the user selects a project or account<a name="pas-handle-change"></a>

A callback is called when the user selects a project or acccount.
When a project is selected, the `onProjectClick` callback is called with the clicked project's `id`.
When an account is selected, the `onAccountClick` callback is called with the clicked account's `id`.

```js
<GlobalNav
  topNav={{
    projectAccountSwitcher: {
      projects: projects,
      accounts: accounts,
      onProjectClick: this.setActiveProject,
      onAccountClick: this.setActiveAccount,
    }
  }}
/>
```

#### Controlling the active project and account<a name="pas-controlling"></a>

If your app needs to control the active project,
provide the active project's `id` to `activeProjectId`.
If your app needs to control the active account,
provide the active accounts's `id` to `activeAccountId`.
You must also provide callbacks for `onProjectClick`
and `onAccountClick` in this case.

```js
<GlobalNav
  topNav={{
    projectAccountSwitcher: {
      projects: projects,
      accounts: accounts,
      activeProjectId: this.state.activeProjectId,
      activeAccountId: this.state.activeAccountId,
      onProjectClick: this.setActiveProject,
      onAccountClick: this.setActiveAccount,
    }
  }}
/>
```

#### Overriding labels for project and account in the flyout<a name="pas-labels"></a>

If you need to customize the label for the lists of projects or accounts in the flyout menu,
provide a string to the `projectTitle` or `accountTitle` props.

For example, you may want to provide those labels in your user's default language.

```js
<GlobalNav
  topNav={{
    projectAccountSwitcher: {
      projects: projects,
      accounts: accounts,
      projectTitle: 'Proyectos',
      accountTitle: 'Cuentas'
    }
  }}
/>
```

### Help

You may configure the Topnav with a help menu.
The help menu is a list of options clustered into groups.

#### Providing options with links<a name="help-link"></a>

If when your user clicks an option, you want to navigate to a different page,
provide a url to the `link` prop for that option.

```js
<GlobalNav
  topNav={{
    help: {
      groups: [
        {
          options: [
            { name: 'Option one', link: 'http://hig.autodesk.com' },
            { name: 'Option two', link: 'http://hig.autodesk.com' }
          ]
        }
      ]
    }
  }}
/>
```

#### Providing options with click handlers<a name="help-on-click"></a>

If when your user clicks an option, handle navigation in some other way,
provide an `onClick` callback.

```js
<GlobalNav
  topNav={{
    help: {
      groups: [
        {
          options: [
            { name: 'Option one', onClick={() => {console.log('Option one clicked')}}},
            { name: 'Option two', onClick={() => {console.log('Option two clicked')}}}
          ]
        }
      ]
    }
  }}
/>
```


## SubNav Props<a name="sub-nav"></a>

The Subnav displays the name or icon of the active module,
and displays siblings to the active submodule in the form of tabs.

If you want the Subnav to appear in your app, pass `true` to the `showSubNav` prop.

```js
<GlobalNav showSubNav={true} />
```

## SideNav Props

Modules and submodules as configured above will appear in the Sidenav.
The Sidenav can be configured with some additional props.

### Headers
### Providing header labels<a name="side-nav-headers"></a>

The `headerLabel` and `superHeaderLabel` appear the the top of the Sidenav.

```js
<GlobalNav
  sideNav={{
    superHeaderLabel: "AutoDesk",
    headerLabel: "BIM 360"
  }}
/>
```

### Header labels with links<a name="side-nav-header-links"></a>

Header labels can be cofigured with links. When cllicked,
the browser will navigate to the url provided
to the `headerLink` and `superHeaderLink` props

```js
<GlobalNav
  sideNav={{
    superHeaderLabel: "AutoDesk",
    superHeaderLink: 'http://hig.autodesk.com',
    headerLabel: "BIM 360",
    headerLink: 'http://hig.autodesk.com',
  }}
/>
```

### Header labels with click handlers<a name="side-nav-header-on-click"></a>

If you need to handle navigation in some other way,
provide handlers to the `onHeaderClick` or `onSuperHeaderClick` props.

```js
<GlobalNav
  sideNav={{
    superHeaderLabel: "AutoDesk",
    onSuperHeaderClick: () => {console.log('Super header has been clicked.')},
    headerLabel: "BIM 360",
    onHeaderClick: () => {console.log('Header has been clicked.')},
  }}
/>
```


### Links

You can configure the Sidenav with a list of links below the modules and submodules.

### Links with hrefs<a name="side-nav-links-links"></a>

If you want the browser to navigate to a new page when a link is clicked,
provide a url to the `link` prop for that link.

```js
<GlobalNav
  sideNav={{
    links: [
      { title: 'AutoDesk HIG', link: 'http://hig.autodesk.com' }
    ]
  }}
/>
```

### Links with click handlers<a name="side-nav-links-on-click"></a>

If you want to handle navigation some other way when a link is clicked,
provide an `onClick` callback.

```js
<GlobalNav
  sideNav={{
    links: [
      { title: 'AutoDesk HIG', onClick: () => {console.log('AutoDesk link was clicked')} }
    ]
  }}
/>
```

### Copyright

### Providing a copyright notice<a name="side-nav-copyright"></a>

If you need to override the copyright notice at the bottom of the Sidenav,
for example, to display it in another language, provide a string to the `copyright` prop.

```js
<GlobalNav copyright="© 2017 Autodesk, Inc." />
```

### Custom Sidenav content<a name="side-nav-slot"></a>

You can display arbitrary markup with the Sidenav by passing rendered JSX to the `slot` prop.

```js
<GlobalNav
  sideNav={{
    slot: (
				<div>
					<Button
						title="Designer Toolkit"
						link="https://github.com/Autodesk/hig"
					/>
					<br/>
					<Button
						title="Git Repository"
						type="secondary"
						link="https://github.com/Autodesk/hig"
						target="_blank"
					/>
				</div>
		)
  }}
/>
```
