import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import RootComponent from './RootComponent';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};

export default App;
