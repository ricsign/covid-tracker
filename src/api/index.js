import axios from 'axios';

// const requestUrl = 'https://covid19.mathdro.id/api';
const globalUrl = "https://disease.sh/v3/covid-19/all"; // for cards
const countriesUrl = "https://disease.sh/v3/covid-19/countries"; // for bar graph and table
const dailyUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all" // for line graph

// fetch global data
export const fetchGlobalData = async () => {
    try {
        const {data : {cases, recovered, deaths, updated, todayCases, todayRecovered, todayDeaths}} = await axios.get(globalUrl);
        return {cases, recovered, deaths, lastUpdate: new Date(updated).toLocaleDateString(), todayCases, todayRecovered, todayDeaths};
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

// fetch list of countries
export const fetchCountriesList = async () => {
    try{
        const {data} = await axios.get(countriesUrl);
        const ret = [];
        for(const obj of data){
            ret.push({country : obj.country, iso3: obj.countryInfo.iso3, flag: obj.countryInfo.flag});
        }
        return ret;
    } catch (e) {
        console.log(e);
    }
}

// fetch a specific country's data
export const fetchCountryData = async (country) => {
    try{
        const {data : {cases, recovered, deaths, updated, countryInfo, todayCases, todayRecovered, todayDeaths}} = await axios.get(`${countriesUrl}/${country.toLowerCase()}`);
        return {cases, recovered, deaths, lastUpdate: new Date(updated).toLocaleDateString(), todayCases, todayRecovered, todayDeaths, countryInfo};
    } catch (e) {
        console.log(e);
    }
}