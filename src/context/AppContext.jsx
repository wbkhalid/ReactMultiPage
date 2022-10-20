import React, { useContext, useReducer } from 'react';
import reducer from './Reducer'

const initialState = {
  name: '',
  image: '',
};



const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: 'UPDATE_HOME',
      payload: {
        name: 'Waleed bin kahlid',
        image: './images/hero.jpg',
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: 'UPDATE_ABOUT',
      payload: {
        name: 'WBK Chaudhary',
        image: './images/about.jpg',
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppConusmer = () => {
  return useContext(AppContext);
};
export default AppContext;

export { AppProvider, useAppConusmer };
