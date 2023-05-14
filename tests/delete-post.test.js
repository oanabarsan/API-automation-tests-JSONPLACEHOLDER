const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Delete post endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete existing post", async () => {

    const postId = 1;

    await spec()
      .delete(`${baseUrl}/posts/${postId}`)
      .expectStatus(200) //204
      .expectResponseTime(3000);


      await spec()
      .get(`${baseUrl}/posts/${postId}`)
      .expectStatus(200) // 404 (for validating the previous test)

  });
});
