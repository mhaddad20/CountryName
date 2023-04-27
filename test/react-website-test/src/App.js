
import React ,{useState} from 'react';
import { Navbar } from './Nav';
import { CountryInfo } from './CountryInfo';
import './App.css'


const App = () => {
  

  
  return (

      <div className="container">
             <Navbar/>

<CountryInfo/>


      </div>
  
  );
}

export default App;
