import ReactDOM from 'react-dom';
import { Map } from './Map';
import Name from './Name';
import Location from './Location';
import UserForm from './UserForm';
import { GlobalProvider } from './utils/GlobalState';
import './styles.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="container left-container">
          {' '}
          <h2 className="is-size-4">
            We'll use the React Context API with useReducer to create a Global
            Store with dispatch actions to pass and receive data in any
            component.
          </h2>
          <div className="container form-container">
            <UserForm />
            <h2 className="is-size-4">
              User Info Here{' '}
              <span role="img" aria-label="point-down-label">
                👇
              </span>
            </h2>
            <p>
              These two children components and their nested components can
              receive data.
            </p>
            <Name />
            <Location />
          </div>
        </div>
        <div className="container map">
          <Map />
        </div>
      </div>
    </GlobalProvider>
  );
}

// Wrap parent component with context provider
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
