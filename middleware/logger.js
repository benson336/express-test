const moment = require("moment");
//middleware function
const logger = (req, res, next) => {
  //outputs http://localhost:5000/api/members:2019-02-21T20:46:27-05:00
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }:${moment().format()}`
  );
  next();
};

module.exports = logger;