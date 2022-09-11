import Navbar from './Component/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { AppContext, AppProvider } from './Context/AppContext';
import Theme from './Component/Theme';
import Settings from './Component/Settings';
import Reducer from './Component/Reducer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AppProvider>
          <Theme />
          <Navbar />
          <Settings />
          <Reducer / >
        </AppProvider>
      </header>
    </div>
  );
}

export default App;
