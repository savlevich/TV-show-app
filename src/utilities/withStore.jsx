import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const withStore = (Component, initialState = {}) => () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  return <Provider store={store}>{Component}</Provider>;
};

export default withStore;
