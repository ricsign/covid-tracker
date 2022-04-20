import React from 'react';
import {useState, useEffect} from 'react';

import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchGlobalData} from './api';

function App() {
  let [globalData, setGlobalData] = useState({});

  // When mounting app, fetch global data from api
  useEffect(()=>{
    const getGlobalData = async () => {
      const data = await fetchGlobalData();
      // After getting the data, store in state to pass to props
      setGlobalData(globalData => data);
    };
    getGlobalData();

  },[]);

  return (
    <div className={styles.container}>
      <Cards data={globalData} />
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
