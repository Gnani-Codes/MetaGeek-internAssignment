const fetch = require("node-fetch");

const usersUrl = "http://jsonplaceholder.typicode.com/users";

const usersAndPostsDetails = async () => {
  try {
    const options = {
      method: "GET",
    };
    const response = await fetch(usersUrl, options);
    const usersData = await response.json();
    console.log(usersData);

    const usersWithPosts = await Promise.all(
      usersData.map(async (obj) => {
        const postsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${obj.id}`
        );
        const posts = await postsResponse.json();
        return { ...obj, posts };
      })
    );
    console.log(usersWithPosts, "user with posts");
    return usersWithPosts;
  } catch (error) {
    console.log(`error ar ${error.message}`);
  }
};

usersAndPostsDetails()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
