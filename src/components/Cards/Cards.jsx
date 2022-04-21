import React from 'react';

import {Card, CardContent, Typography, Grid} from '@mui/material';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {cases, recovered, deaths, lastUpdate, todayCases, todayRecovered, todayDeaths, countryInfo}}) => {
    // In case there is no data given, print loading
    if(!cases) return "Loading Data...";

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed Cases</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={cases} duration={3} separator="," />
                        </Typography>
                        <Typography>
                            +<CountUp start={0} end={todayCases} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={3} separator="," />
                        </Typography>
                        <Typography>
                            +<CountUp start={0} end={todayRecovered} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deceased</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={3} separator="," />
                        </Typography>
                        <Typography>
                            +<CountUp start={0} end={todayDeaths} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            {countryInfo && <img src={countryInfo.flag} alt={countryInfo.iso3} className={styles.flag} width="300px" />}
        </div>
    );
}

export default Cards;