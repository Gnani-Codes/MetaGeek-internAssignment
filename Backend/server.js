const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const dbPath = path.join(__dirname, "blogApplication.db");
const app = express();
app.use(express.json());
app.use(cors());

let db;

const initializeServerAndDb = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  } catch (e) {
    console.log(`Error @ ${e}`);
    process.exit(1);
  }
};

initializeServerAndDb();
//1.1.1 Created a table named blogApplication.db with required entities

//1.2.1 middleware to log timestamp and url
const logTimestampAndUrl = async (request, response, next) => {
  const { url } = request;
  console.log(url, "url");
  const currentTime = new Date();
  const timeStamp = currentTime.toISOString();
  console.log(timeStamp, "time");
  next();
};

//API to retrieve all the users
app.get("/users", logTimestampAndUrl, async (request, response) => {
  const getUserQuery = `SELECT * FROM user ;`;
  const userDetails = await db.all(getUserQuery);
  console.log(userDetails);
  response.send(userDetails);
});

//1.1.2 API to retrieve posts of specific user
app.get(
  "/users/:userId/posts",
  logTimestampAndUrl,
  async (request, response) => {
    const { userId } = request.params;
    const userPostsQuery = `SELECT post.id,post.title,post.description,post.published_date
  ,user.username,user.name,user.email,thumbnail_url
   FROM post INNER JOIN user on post.user_id = user.id 
  WHERE post.user_id = ${userId} ;`;
    const userPosts = await db.all(userPostsQuery);
    console.log(userPosts);
    response.send(userPosts);
  }
);

//1.2.2 API to retrieve all posts from database
app.get("/posts/", logTimestampAndUrl, async (request, response) => {
  const getAllPostsQuery = `SELECT post.id,title,description,published_date,
  user.username,user.name,user.email, thumbnail_url
   FROM 
   post INNER JOIN user on post.user_id = user.id ;`;
  const getAllPostsDetails = await db.all(getAllPostsQuery);
  console.log(getAllPostsDetails);
  response.send(getAllPostsDetails);
});
