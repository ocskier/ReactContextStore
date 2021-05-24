import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Location from './Location';
import UserForm from './UserForm';
import { GlobalProvider } from './utils/GlobalState';
import './styles.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h2 className="is-size-4">
          We'll use the React Context API with useReducer to create a Global
          Store with dispatch actions to pass and receive data in any component.
        </h2>
        <div className="container">
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
    </GlobalProvider>
  );
}

// Wrap parent component with context provider
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
