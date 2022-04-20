import React from 'react';

import { NativeSelect, FormControl } from '@mui/material';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    return (
        <FormControl className={styles.container}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;