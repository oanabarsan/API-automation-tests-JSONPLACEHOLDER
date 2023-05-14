const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

const getPostsSchema = require('../data/response/get-posts-schema.json');

describe("Get all posts endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get all posts test", async () => {
    await spec()
      .get(`${baseUrl}/posts`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains('sunt aut facere repellat')
      .expectJsonSchema(getPostsSchema);
  });

  it("Get post with filter id", async () => {
    await spec()
      .get(`${baseUrl}/posts/1`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains('recusandae');
  });
});
