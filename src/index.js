import React from 'react';
import {Provider} from 'react-redux';
import store from './utils/store';
import RootNavigator from '../src/navigation';
import NavigationService from './utils/NavigationService';

const App = () => (
  <Provider store={store}>
    <RootNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
