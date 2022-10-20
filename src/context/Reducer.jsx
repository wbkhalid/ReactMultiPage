const reducer = (state, action) => {
  if (action.type === 'UPDATE_HOME') {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === 'UPDATE_ABOUT') {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  return state;
};


export default reducer;