import types from './types';

export const changeModule = (activeModuleId) => ({
	type: types.GLOBAL_NAV_ON_MODULE_CHANGE,
	payload: { activeModuleId }
});
