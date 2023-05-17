const { spec, request } = require("pactum");

const baseUrl = "https://cuddly-buses-roll.loca.lt";

describe("QA-Practice REST - auth flow test suite", () => {
  let token = "";

  before(async () => {
    request.setDefaultTimeout(5000);

    const requestBody = {
      password: "admin",
      username: "admin",
    };

    const resp = await spec()
      .post(`${baseUrl}/api/v1/simulate/token`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200);

    token = resp.body.token;
    console.log(token);
  });

  it("get all employees", async () => {
    await spec()
      .get(`${baseUrl}/api/v1/simulate/get/employees`)
      .withHeaders("Authorization", "Bearer " + token)
      .expectStatus(200);
  });

  it("get all employees - unauthorized", async () => {
    await spec()
      .get(`${baseUrl}/api/v1/simulate/get/employees`)
      .expectStatus(401);
  });
});
