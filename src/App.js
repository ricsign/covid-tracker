import React from 'react';
import {useState, useEffect} from 'react';

import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchAllData} from './api';

function App() {
  let [allData, setAllData] = useState({});

  // When mounting app, fetch data from api
  useEffect(()=>{
    const getAllData = async () => {
      const {data} = await fetchAllData();
      // After getting the data, store in state to pass to props
      setAllData(allData => data);
    };
    getAllData();

  },[]);

  return (
    <div className={styles.container}>
      <Cards data={allData} />
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
