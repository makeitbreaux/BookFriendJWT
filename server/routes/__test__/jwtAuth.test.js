const app = require("../../index")
const request = require('supertest');


describe("POST /auth/is-verify", () => {
    describe("Given a first name, last name, and email", () => {
        
        it("Should respond with a 403 status code", async () => {
            const response = await request(app).post("/auth/is-verify").send({
                user_first_name: "user_first_name",
                user_last_name: "user_last_name",
                email: "email"
            })
            expect(response.statusCode).toBe(403)
        })
        it("should specify json in the content type header", async () => {
          const response = await request(app).post("/auth/is-verify").send({
            user_first_name: "user_first_name",
            user_last_name: "user_last_name",
            email: "email"
          })
          expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

      })
    
      describe("when the username and password is missing", () => {
        it("should respond with a status code of 403", async () => {
          const bodyData = [
            {user_first_name: "user_first_name"},
            {user_last_name: "user_last_name"},
            {email: "email"},
            {password: "password"},
            {}
          ]
          for (const body of bodyData) {
            const response = await request(app).post("/auth/is-verify").send(body)
            expect(response.statusCode).toBe(403)
          }
        })
    })
})

