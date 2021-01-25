const axios = require('axios');
const { getIndicator } = require('../src/services/indicator');
jest.mock('axios');

describe('Get indicators service', () => {
  it('should return the indicator requested how paramether', async () => {
    const indicator = 'uf';
    const res = {
      data: {
        version: '1.6.0',
        autores: 'mindicador.cl',
        codigo: 'dolar',
        nombre: 'Dólar observado',
        unidad_medida: 'Pesos',
        serie: [{ fecha: '2021-01-25T03:00:00.000Z', valor: 724.26 }]
      }
    };
    axios.get.mockResolvedValue(res);

    const data = await getIndicator(indicator);

    expect(data).toEqual(res);
  });
});
