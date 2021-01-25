const axios = require('axios');

function getIndicator(indicator) {
  return axios.get(`https://mindicador.cl/api/${indicator}`);
}

module.exports = { getIndicator };
