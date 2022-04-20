import axios from 'axios';

const requestUrl = 'https://covid19.mathdro.id/api';

export const fetchAllData = async () => {
    try {
        return await axios.get(requestUrl);
    } catch (e) {
        console.log(e);
    }
};