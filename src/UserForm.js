import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';

const Form = () => {
  const {
    state: { name, location },
    setState,
  } = useContext(GlobalContext);

  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={(e) => setState({ location, name: e.target.value })}
          value={name}
        />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={(e) => setState({ name, location: e.target.value })}
          value={location}
        />
      </div>
    </div>
  );
};

export default Form;
