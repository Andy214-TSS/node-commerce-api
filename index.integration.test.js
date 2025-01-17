
const request = require('supertest');
const app = require("./index")

/*
version: 1.0.2:
Includes connection to the database which will be trigged as well in this integration test.
*/
describe("API Test", () => {
    test("should return status of 200 and text OK when routing to the root", async () => {
        const response = await request(app)
            .get("/")
            .expect(200);

        expect(response.text).toEqual('OK');
    })

    test("should return status of 200 and text OK when triggering health check API ", async () => {
        const response = await request(app)
            .get("/health")
            .expect(200);

        expect(response.text).toEqual('OK');
    })
})