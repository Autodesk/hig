export const createReducer = ( initialState ) => ( reducerMap ) => ( state = initialState, action ) => {
    const reducer = reducerMap[ action.type ];
    return reducer ? reducer( state, action ) : state;
};

export const createTypes = ( types ) => {
  return types.reduce((types, type) => {
    types[type] = type;
    return types;
  }, {});
};
