const axios = require('axios')
jest.mock('axios', () => jest.fn());

describe("test general", () => {
    it("should return true", () => {
        const axios = {
            get: jest.fn().mockResolvedValue({ data: 1 }),
          };
        //Another way to test a boolean
        //axios.get.mockResolvedValue(resp);
        expect(true).toEqual(true);
    });
});