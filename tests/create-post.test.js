const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Create post endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new post", async () => {
    const requestBody = {
      title: "oana",
      body: "lorem ipsum",
    };

    await spec()
      .post(`${baseUrl}/posts`)
      .expectStatus(201)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.title)
  });
});
