import { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';
// This component displays location from context

const Location = () => {
  const {
    state: { location },
  } = useContext(GlobalContext);
  return (
    <div>
      {/* Display user's location from Context */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {location.city}
      </h2>
    </div>
  );
};

export default Location;
