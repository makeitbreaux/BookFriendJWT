const app = require("../../index")
const request = require('supertest');

describe("GET /auth/is-verify", () => {
    describe("Gets user", () => {
        
        it("Should respond with a 404 status code", async () => {
            const response = await request(app).get("/auth/is-verify").send({
                user_first_name: "user_first_name",
                user_last_name: "user_last_name",
                email: "email"
            })
            expect(response.statusCode).toBe(404)
        })
    })
})