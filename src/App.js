import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MapComponent from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Header/>
        </header>
        <div className="main-content">
          <aside>
            <FormInput />
            
          </aside>
          <main>
            <MapComponent />
          </main>
        </div>
        <footer>
          
        </footer>
      </div>
    </Provider>
  );
}

export default App;

