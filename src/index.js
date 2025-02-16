const express = require("express");

const { PORT } = require("./config/ServerConfig");

const setUpAndStartServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is up and runnning on ${PORT}`);
  });
};
setUpAndStartServer();
