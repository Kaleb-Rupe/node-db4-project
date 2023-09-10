const express = require("express");
const recipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

//eslint-disable-next-line
server.use("*", (req, res, next) => {
  res.json({ api: "up" });
});

module.exports = server;
