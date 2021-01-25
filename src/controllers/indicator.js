const { getIndicator } = require('../services/indicator');

function indicators(req, res) {
  const { indicator } = req.query;
  if (!indicator) {
    return res
      .status(400)
      .send({ message: 'The indicator value can not be undefined' });
  }
  getIndicator(indicator).then((indicator) => {
    const { codigo, nombre, unidad_medida } = indicator.data;
    return res.status(200).send({
      codigo,
      nombre,
      unidad_medida,
      fecha: indicator.data.serie[0].fecha,
      valor: indicator.data.serie[0].valor
    });
  });
}
module.exports = { indicators };
