import React from 'react';
import {useState, useEffect} from 'react';

import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchGlobalData, fetchCountryData} from './api';
import titleImage from './images/title.jpeg';

function App() {
  let [data, setData] = useState({});
  let [chosenCountry, setChosenCountry] = useState('');

  // When mounting app, fetch global data from api
  useEffect(()=>{
    const getGlobalData = async () => {
      // After getting the data, store in state to pass to props
      setData(await fetchGlobalData());
    };

    getGlobalData();

  },[]);

  // Callback function as prop to handle changing chosen country
  const handleCountryChange = async (country) => {
    // Fetch data from api and change the state
    if(!country) setData(await fetchGlobalData()); // If global is selected, we fetch global data instead
    else setData(await fetchCountryData(country));
    setChosenCountry(country);
  }

  return (
    <div className={styles.container}>
      <img src={titleImage} alt="Covid Tracker Logo" className={styles.titleImage}/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} chosenCountry={chosenCountry} />
    </div>
  );
}

export default App;
