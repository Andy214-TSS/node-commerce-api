
const request = require('supertest');

const setupIntegrationTest = () => {
    const { exec } = require("child_process");

    exec("sqlite3 database-test.db < src/database/schema.sql", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
};

setupIntegrationTest();

// setupIntegrationTest to be run first to ensure database is created before app
const app = require("./index")

/*
version: 1.0.2:
Includes connection to the database which will be trigged as well in this integration test.
*/
describe("API Test", () => {
    describe("API Health Test", () => {
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
    
    describe("Product API Test", () => {
        test("should return status of 200 and [] empty products when calling GET products", async () => {
            const response = await request(app)
                .get("/api/products")
                .expect(200);
    
            expect(response.body).toEqual([]);
        })
    })
})