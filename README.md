# MetaGeek-internAssignment
Master branch consists of, 
 -Backend
 -Frontend
 -GeneralProgrammingQuestions
 -NodeJs

 (1) Backend consists of server.js where i have created a server using express and it alos consists "blogApplication.db" file which was queried to   
  contain the data in SQL.
 To run the initiate the server, direct to /Backend and type nodemon server.js. server will be launched. 
 It also contains server.http file to test the APIs created.
 The server listens to "http://localhost:5000/".

 (2) Frontend consists of react code for the website, i have intigrated both the frontend and backend using  "concurently" module.
   To run both the server and client(react code), direct to /Frontend/blog-application and type "npm run start" command in terminal, it will 
    concurrently runs both server and client. The command "concurrently \"npm run server\" \"npm run client\". present in package.json does this 
    operation.
    The client listens runs at  "http://localhost:3000/".
NOTE: if we dont run the server, the client will not fetch thee data from server, and it can seen as loading view in UI.

(4) This folder contains solution for Nodejs 1.4.1, to run it direct to /NodeQuestion1.4.1 and type "node index.js". Output will be logged in termminal. 
For question 1.4.2, to run it direct to /NodeQuestion1.4.2 and type "node index.js". 
-The API will fetch the data from "http://jsonplaceholder.typicode.com/users", and logs it .(if no error)

(3) This folder contains solutions to those general programming questions.
