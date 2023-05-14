const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Put post endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Put new post", async () => {
    const requestBody = {
      title: "andreea",
      body: "lorem ipsum",
    };

    const postId = 1;

    await spec()
      .put(`${baseUrl}/posts/${postId}`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.title);
  });
});
