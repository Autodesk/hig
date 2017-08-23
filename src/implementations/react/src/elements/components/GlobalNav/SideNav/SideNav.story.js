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
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import { GlobalNav } from '../../../../react-hig';
import SideNav from './SideNav';

const links = [
  { title: 'Autodesk Main', url: 'http://www.autodesk.com' },
  {
    title: 'AutoCAD',
    url: 'https://www.autodesk.com/products/autocad/overview'
  },
  { title: 'Maya', url: 'https://www.autodesk.com/products/maya/overview' }
];

const moduleFixtures = [
  {
    id: "1-1",
    groupId: '1',
    icon: "insight",
    title: "Insight"
  },
  {
    id: "1-2",
    groupId: '2',
    icon: "construction-management",
    title: "Authoring Collaboration"
  },
  {
    id: "1-3",
    groupId: '2',
    icon: "document-management",
    title: "Document Management"
  },
  {
    id: "1-4",
    groupId: '2',
    icon: "placeholder",
    title: "Model Coordination"
  },
  {
    id: "1-5",
    groupId: '2',
    icon: "project-management",
    title: "Project Management"
  },
  {
    id: "1-6",
    groupId: '2',
    icon: "quantities",
    title: "Quantities"
  },
]

const submoduleFixtures = [
  {
    id: "1-1-1",
    moduleId: '1-1',
    title: "Overview",
  },
  {
    id: "1-1-2",
    moduleId: '1-1',
    title: "Risk",
  },
  {
    id: "1-1-3",
    moduleId: '1-1',
    title: "Quality",
  },
  {
    id: "1-1-4",
    moduleId: '1-1',
    title: "Reports",
  },
  {
    id: "1-2-5",
    moduleId: '1-2',
    title: "Cloud Work Sharing",
  },
  {
    id: "1-2-6",
    moduleId: '1-2',
    title: "Fluent",
  },
  {
    id: "1-2-7",
    moduleId: '1-2',
    title: "Approvals",
  },
  {
    id: "1-3-8",
    moduleId: '1-3',
    type: "submodule",
    title: "Document Workflow",
  },
  {
    id: "1-4-9",
    moduleId: '1-4',
    title: "Overview",
  },
  {
    id: "1-4-10",
    moduleId: '1-4',
    title: "Models",
  },
  {
    id: "1-4-11",
    moduleId: '1-4',
    title: "Checklists",
  },
  {
    id: "1-4-12",
    moduleId: '1-4',
    title: "Clashes",
  },
  {
    id: "1-4-13",
    moduleId: '1-4',
    title: "Issues",
  },
  {
    id: "1-5-14",
    moduleId: '1-5',
    title: "RFIs",
  },
  {
    id: "1-5-15",
    moduleId: '1-5',
    title: "Submittals",
  },
  {
    id: "1-5-16",
    moduleId: '1-5',
    title: "Daily Log",
  },
  {
    id: "1-6-17",
    moduleId: '1-6',
    title: "2D",
  },
  {
    id: "1-6-18",
    moduleId: '1-6',
    title: "3D",
  }
];

storiesOf('SideNav', module)
  .addWithInfo('default', <div><p>Global Nav basic usage</p></div>, () => {
    const numberOfModulesOptions = { '6': '6', '3': '3' };
    const moduleCount = select('Number of modules', numberOfModulesOptions, '5');

    const modules = moduleFixtures.slice(0, parseInt(moduleCount));

    return (
      <GlobalNav sideNavOpen={true}>
        <SideNav
          superHeaderLabel={text('Super header label', 'Global Construction')}
          headerLabel={text('Header label', 'Oakwood Medical Center')}
          superHeaderLink={text('Super header link', '')}
          headerLink={text('Header link', '')}
          links={links}
          modules={modules}
          submodules={submoduleFixtures}
          onModuleChange={action('Module changed')}
          copyright={text('Copyright', '© 2017 Autodesk, Inc.')}
        />
      </GlobalNav>
    );
  })
