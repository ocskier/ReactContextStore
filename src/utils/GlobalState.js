import React, { useEffect, useState } from 'react';

const GlobalContext = React.createContext(null);

function GlobalProvider({ children }) {
  const [state, setState] = useState({ name: '', location: '' });
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
        setState({ ...state, location: userCity });
      },
      () => {
        console.log("Couldn't get position!");
      }
    );
  }, []);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
