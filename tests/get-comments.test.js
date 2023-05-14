const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

const getPostsSchema = require('../data/response/get-comments-response-schema.json');

describe("Get all comment endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get all comments test", async () => {
    await spec()
      .get(`${baseUrl}/comments`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains('id labore ex et quam laborum')
      .expectJsonSchema(getPostsSchema);
  });

  it("Get all comments with filter id", async () => {
    await spec()
      .get(`${baseUrl}/comments?id=1`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains('id labore ex et quam laborum')
      .expectJsonSchema(getPostsSchema);
  });
});
