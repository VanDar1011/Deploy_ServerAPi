const moogoose = require("mongoose");
const userSchema = new moogoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
let User = moogoose.model("User", userSchema);
module.exports = { User };
