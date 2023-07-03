/* eslint-disable react/forbid-prop-types */
import { Preloader } from '@/components/common';
import PropType from 'prop-types';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from '@/routers/AppRouter';

const App = ({ store, persister }) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persister={persister}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>
);

App.propTypes = {
  store: PropType.any.isRequired,
  persister: PropType.any.isRequired
};

export default App;
