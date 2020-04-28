const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'abd778c1f9msh49c375676d79f54p12068cjsnbfb3ba2d0b32' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dirName = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dirName,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}