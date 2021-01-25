const { indicators } = require('../src/controllers/indicator');

describe('Indicator Controller', () => {
  it('Return status 400 if indicator is undefined', async () => {
    const req = { query: { indicator: '' } };
    req.params = jest.fn().mockReturnValue(req);

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    await indicators(req, res);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
