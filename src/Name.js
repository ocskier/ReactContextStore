import { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';
// This component displays name from Context
const RandomComponent = () => {
  const {
    state: { name },
  } = useContext(GlobalContext);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {name}
      </h2>
    </div>
  );
};

export default RandomComponent;
