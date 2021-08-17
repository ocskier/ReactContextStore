import React, { useEffect, useReducer, useState } from 'react';
import actions from './actions';

const GlobalContext = React.createContext(null);

function reducer(state, { type, payload }) {
  switch (type) {
    case 'UPDATE_LOCATION':
      return { ...state, location: { ...payload } };
    case 'UPDATE_COORDS':
      return {
        ...state,
        location: {
          ...state.location,
          coords: { ...payload.coords },
        },
      };
    case 'UPDATE_CITY':
      return {
        ...state,
        location: {
          ...state.location,
          ...payload,
        },
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error();
  }
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { name: '', location: {} });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude: lat, longitude: lon } }) => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyD_tgpw_aI3elBJ3FQzH5kqi00Qep6jXxM`
        );
        const data = await response.json();
        console.log(data.plus_code);
        const userCityArr = [
          data.plus_code.compound_code.split(' ').slice(1, 2),
          ' ',
          data.plus_code.compound_code.split(' ').slice(2, 3),
        ];
        const userCity = userCityArr
          .join('')
          .substring(0, userCityArr.join('').length - 1);
        dispatch(actions.updateLocation(userCity, { lat, lon }));
      },
      () => {
        console.log("Couldn't get position!");
      }
    );
  }, []);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };