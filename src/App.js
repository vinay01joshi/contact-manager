import React from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header'
import AddContact from './components/contacts/AddContact'

import {Provider} from './Context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">    
        <Header/>
        <div className="container">
          <AddContact/>
          <Contacts/>      
        </div>      
      </div>
    </Provider>
  );
}

export default App;
