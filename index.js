const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
// configure bodyparser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || '3000';

// uf, ,ivp, dolar, dolar_intercambio , euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin
 function getIndicator(indicator) {
  return  axios.get(`https://mindicador.cl/api/${indicator}`);
  
}

app.get('/', (req, res) => {
  const {indicator}= req.query
  getIndicator(indicator).then(indicator=>{
    const {codigo, nombre, unidad_medida}= indicator.data
    res.json({codigo, 
      nombre, 
      unidad_medida, 
      fecha: indicator.data.serie[0].fecha,
      valor: indicator.data.serie[0].valor
    });
  })
  
  
});

app.listen(port, () => {

console.log(`listening at http://localhost:${port}`);

});