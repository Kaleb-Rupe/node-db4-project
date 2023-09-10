const router = require("express").Router();

//eslint-disable-next-line
router.use("*", (req, res, next) => {
  res.json({ api: "up" });
});

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(500).json({
    customeMessage: "Something went wrong inside the recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
