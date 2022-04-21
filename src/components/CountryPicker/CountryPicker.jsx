import React, {useState, useEffect} from 'react';

import { fetchCountriesList } from '../../api';
import { NativeSelect, FormControl } from '@mui/material';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countriesList, setCountriesList] = useState([]);

    // When mounted picker, fetch the list of countries
    useEffect(() => {
        const getCountryList = async () => {
            setCountriesList(await fetchCountriesList());
        }

        getCountryList();
    },[]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countriesList.map((countr, i) => <option key={i} value={countr.country}>{countr.country} ({countr.iso3})</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;