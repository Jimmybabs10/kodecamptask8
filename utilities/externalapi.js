const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
  params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
  headers: {
    'X-RapidAPI-Key': 'f45c44732cmsh274b869d51f413dp1136d4jsnb000b89cb6bd',
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
  }
};

async function getMyLocation(){
    const myLocationData = await axios.request(options)
    const {longitude, latitude} = myLocationData.data;
    const myCoordinate = {x: longitude, y:latitude};
    console.log(myCoordinate);
    return myCoordinate;
}

module.exports = {getMyLocation};