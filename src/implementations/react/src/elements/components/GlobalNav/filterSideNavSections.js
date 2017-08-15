export default function filterSideNavSections(sections, query) {
  return sections.reduce((acc, section) => {
    const groups = filterGroups(section.groups, query);

    if (groups.length > 0) {
      return acc.concat({ ...section, groups })
    }
    return acc;
  }, []);
}

function filterGroups(groups, query) {
  return groups.reduce((acc, group) => {
    const modules = filterModules(group.modules, query);

    if (modules.length > 0) {
      return acc.concat({ ...group, modules })
    }
    return acc;
  }, []);
}

function filterModules(modules, query) {
  return modules.reduce((acc, module) => {
    const submodules = filterSubmodules(module.submodules, query);

    if (submodules.length > 0 || match(module.label, query)) {
      return acc.concat({ ...module, submodules })
    }
    return acc;
  }, []);
}

function filterSubmodules(submodules, query) {
  return submodules.filter(submodule => {
    return match(submodule.label, query);
  });
}

function match(string, query) {
  return string.toLowerCase().startsWith(query.toLowerCase());
}