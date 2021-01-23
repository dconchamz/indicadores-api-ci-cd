const axios = require('axios')
const {getIndicator}= require('../src/services/indicator')
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