const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();
// configure bodyparser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || '3000';

routes(app);
//http://localhost:3000?indicator=dolar

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
