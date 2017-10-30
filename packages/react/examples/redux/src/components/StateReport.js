import React from 'react';
import PropTypes from 'prop-types';
import { Spacer, H3, Dropdown } from 'hig-react';
import fixtures from '../fixtures';

const StateReport = (props) => {
  const moduleOptions = fixtures.modules.reduce((acc, module) => {
    const submoduleOptions = fixtures.submodules
                        .filter(s => s.moduleId === module.id)
                        .map(s => ({ label: `- ${s.title}`, value: s.id }));
    return acc.concat({ label: module.title, value: module.id }, ...submoduleOptions);
  }, []);

  return (
    <div style={{backgroundColor: 'white'}}>
      <Spacer inset="m">
      <Dropdown
        label="activeModuleId"
        options={moduleOptions}
        value={props.activeModuleId}
        onChange={props.onModuleChange}
      />
      </Spacer>
    </div>
  );
};

StateReport.propTypes = {
  activeModuleId: PropTypes.string.isRequired,
  onModuleChange: PropTypes.func.isRequired
}

export default StateReport;