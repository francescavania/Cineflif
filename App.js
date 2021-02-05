
import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import {Store, Persistor} from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react'


const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <Provider store={Store}>
      {/* <PersistGate persistor={Persistor}> */}
        <Navigation />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
