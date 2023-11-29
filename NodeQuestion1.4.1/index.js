const fs = require("fs");

const inputDataFile = "./inputData.json";

fs.readFile(inputDataFile, "utf8", (error, data) => {
  if (error) {
    console.log(`An error occured at ${error.message}`);
    return;
  }

  try {
    const usersData = JSON.parse(data);
    console.log(usersData, "useers");

    const modifiedData = usersData.map((obj) => ({
      ...obj,
      totalPosts: obj.posts.length,
    }));
    console.log(modifiedData, "modified");

    const modifiedFile = "./modifiedUsersDataFile.json";
    fs.writeFile(
      modifiedFile,
      JSON.stringify(modifiedData, null, 2),
      "utf8",
      (error) => {
        if (error) {
          console.log(`error when writing modified data at ${error.message}`);
        } else {
          console.log(`successfully modified new file ${modifiedFile}`);
        }
      }
    );
  } catch (error) {
    console.log(`parsing error at ${error}`);
    process.exit(1);
  }
});
