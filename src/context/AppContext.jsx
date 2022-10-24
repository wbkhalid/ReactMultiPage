import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './Reducer';

// const API = 'https://catfact.ninja/fact';

const AppContext = React.createContext();

const API = 'https://api.github.com/users';

const intialState = {
  name: '',
  image: '',
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

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

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'GET_SERVICES', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppConusmer = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppConusmer };
