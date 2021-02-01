
import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import Navigation from './src/navigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <Navigation />
  );
};

export default App;
