import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);
  /* const [loading, setLoading] = useState(true); */

  //function to call the api and set the state
  const GetApi = async () => {
    try {
      let response = await axios.get(apiUrl);
      /* console.log(response.data); */
      setCountries(response.data);
      /* setLoading(false); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
        <CountriesList countriesList={countries} />
      </div>
      <div>
        <Routes>
          <Route
            path="/country/:id"
            element={<CountryDetails countriesList={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
