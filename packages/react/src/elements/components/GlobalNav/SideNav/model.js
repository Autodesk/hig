export function match(string, query) {
  return string.toLowerCase().startsWith(query.toLowerCase());
}

export function filter({ modules, submodules, ...props }, query) {
  const filteredSubmodules = submodules.filter(submodule =>
    match(submodule.title, query)
  );
  const filteredModules = modules.filter(
    module =>
      filteredSubmodules.some(s => s.moduleId === module.id) ||
      match(module.title, query)
  );

  return { ...props, modules: filteredModules, submodules: filteredSubmodules };
}

export function group({ modules, submodules }) {
  const uniqueGroupIds = Array.from(new Set(modules.map(m => m.groupId)));
  return uniqueGroupIds.map(groupId => ({
    modules: modules.filter(m => m.groupId === groupId).map(module => ({
      ...module,
      submodules: submodules.filter(s => s.moduleId === module.id)
    }))
  }));
}

export function getModuleState(moduleStates, id) {
  const state = moduleStates[id] || {};

  if (state.minimized === undefined) {
    state.minimized = true;
  }
  return state;
}

export function mergeState({ modules, submodules, ...props }, state) {
  const activeModuleId = props.activeModuleId || state.activeModuleId;
  const activeModule = modules.find(m => m.id === activeModuleId) || {};
  const activeSubmodule = submodules.find(m => m.id === activeModuleId) || {};

  return {
    ...props,
    modules: modules.map(module => {
      const moduleWithState = {
        ...module,
        active: module.id === activeModule.id,
        activeChildren: module.id === activeSubmodule.moduleId,
        ...getModuleState(state.moduleStates, module.id)
      };

      return moduleWithState;
    }),
    submodules: submodules.map(submodule => ({
      ...submodule,
      active: submodule.id === activeModuleId
    }))
  };
}
