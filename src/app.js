// // hoac
// // Body parse
// // app.use(express.json()); // nhận body từ json
// // app.use(express.urlencoded({ extended: true })); // nhận body từ urlencoded

const express = require("express");
const app = express();
const { default: helmet } = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const apiRouterHome = require("./routes/apiRouterHome");
const apiRouterUser = require("./routes/apiRouterUser");

// config
dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan("common"));
app.use("/", apiRouterHome);
app.use("/user", apiRouterUser);
const errHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
};

app.use(errHandler);
const notfoundHandler = (req, res) => {
  res.status(404).json({
    message: "Lỗi 404(page not found)",
  });
};
app.use(notfoundHandler);

module.exports = app;
