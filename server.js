// const app = require("./src/app");
// const port = 4000;
// const mongoose = require("./src/services/connectDB");
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const app = require("./src/app");
const port = 4000;
const mongoose = require("./src/services/connectDB");
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
