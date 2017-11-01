import { combineReducers } from "redux";
import types from "./types";
import { createReducer } from "../utils";
import fixtures from '../fixtures';

/* State shape
{
    activeModuleId: string
}
*/

const activeModuleId = createReducer( fixtures.submodules[0].id )({
  [ types.GLOBAL_NAV_ON_MODULE_CHANGE ]: (state, action) => (
    action.payload.activeModuleId
  )
});

export default combineReducers( {
  activeModuleId
} );
