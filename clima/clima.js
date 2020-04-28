const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=188b9f26b0e775a1045fff9ee4786aba&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}