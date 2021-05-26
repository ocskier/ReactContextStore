import React, { useContext, useEffect } from 'react';
import { useDebounceLocation } from './utils/debounceLocation';
import { GlobalContext } from './utils/GlobalState';
import actions from './utils/actions';

const Form = () => {
  const {
    state: { name, location },
    dispatch,
  } = useContext(GlobalContext);
  const debouncedLocation = useDebounceLocation(location.city);
  useEffect(async () => {
    if (debouncedLocation) {
      console.log('Setting new location coords');
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${debouncedLocation}&key=AIzaSyD_tgpw_aI3elBJ3FQzH5kqi00Qep6jXxM`
      );
      const data = await response.json();
      console.log(data);
      dispatch(
        actions.updateCoords({
          lat: data.results[0].geometry.location.lat,
          lon: data.results[0].geometry.location.lng,
        })
      );
    }
  }, [debouncedLocation]);

  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={(e) => dispatch(actions.updateName(e.target.value))}
          value={name}
        />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={(e) => dispatch(actions.updateCity(e.target.value))}
          value={location.city}
        />
      </div>
    </div>
  );
};

export default Form;
