export function match(string, query) {
  return string.toLowerCase().startsWith(query.toLowerCase());
}

export function filter({ modules, submodules }, query) {
  const filteredSubmodules = submodules.filter(submodule => match(submodule.title, query));
  const filteredModules = modules.filter(module => {
    return filteredSubmodules.some(s => s.moduleId === module.id) || match(module.title, query);
  });

  return { modules: filteredModules, submodules: filteredSubmodules }
}

export function group({ modules, submodules }) {
  const uniqueGroupIds = Array.from(new Set(modules.map(m => m.groupId)));
  return uniqueGroupIds.map(groupId => ({
    modules: modules.filter(m => m.groupId === groupId).map(module => {
      return {
        ...module,
        submodules: submodules.filter(s => s.moduleId === module.id)
      }})
  }));
};

export function mergeState({ modules, submodules }, state) {
  const activeModule = modules.find(m => m.id === state.activeModule) || {};
  const activeSubmodule = submodules.find(m => m.id === state.activeModule) || {};

  return {
    modules: modules.map(module => {
      const moduleWithState = {
        ...module,
        active: module.id === activeModule.id || module.id === activeSubmodule.moduleId,
        ...getModuleState(state.moduleStates, module.id)
      }

      return moduleWithState;
    }),
    submodules: submodules.map(submodule => {
      return {
        ...submodule,
        active: submodule.id === state.activeModule,
      }
    })
  }
}

export function getModuleState(moduleStates, id) {
  const state = moduleStates[id] || {};

  if (state.minimized === undefined) {
    state.minimized = true;
  }
  return state;
}
