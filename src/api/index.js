import axios from 'axios';

// const requestUrl = 'https://covid19.mathdro.id/api';
const globalUrl = "https://disease.sh/v3/covid-19/all"; // for cards
const countriesUrl = "https://disease.sh/v3/covid-19/countries"; // for bar graph and table
const dailyUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all" // for line graph

// fetch global data
export const fetchGlobalData = async () => {
    try {
        const {data : {cases, recovered, deaths, updated}} = await axios.get(globalUrl);
        return {cases, recovered, deaths, lastUpdate: new Date(updated).toLocaleDateString()};
    } catch (e) {
        console.log(e);
    }
};

// fetch daily data
export const fetchDailyData = async () => {
    try{
        const {data : {cases, recovered, deaths}} = await axios.get(dailyUrl);
        return {cases, recovered, deaths};
    } catch (e) {
        console.log(e);
    }
}