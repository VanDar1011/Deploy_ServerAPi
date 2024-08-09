const bcrypt = require("bcrypt");
const { User } = require("../model/modelUser");
module.exports = {
  getAll: async (page, limit) => {
    try {
      const skip = (page - 1) * limit;
      let users = await User.find().skip(skip).limit(limit);
      console.log("users", users);
      const totalItems = await User.countDocuments();
      // console.log("totalItems", totalItems);
      if (!users) {
        users = [];
      }
      return {
        status: 200,
        message: "Succes get Users",
        data: users,
        total: users.length(),
      };
    } catch (error) {
      throw error;
    }
  },
  getById: async (_id) => {
    try {
      const user = await User.findById(_id);
      console.log("id", _id);
      if (!user) {
        return { status: 400, message: "User not found" };
      }
      return {
        status: 200,
        message: "Success get User",
        data: user,
      };
    } catch (error) {
      throw error;
    }
  },
  create: async (email, password) => {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return { status: 400, message: "Email already exists" };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashedPassword,
      });
      await user.save();
      return {
        status: 201,
        message: "Success create User",
      };
    } catch (error) {
      throw error;
    }
  },
  update: async (_id, payload) => {
    try {
      const hashedPassword = await bcrypt.hash(payload.password, 10);
      const user = { ...payload, password: hashedPassword };
      // console.log(user);
      const existingUser = await User.findById(_id);
      // console.log("existingUser", existingUser);
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          $set: user,
        },
        { new: true }
      );
      // console.log("updatedUser", updatedUser);
      if (!updatedUser) {
        return {
          status: 400,
          message: "User not found",
        };
      }
      return {
        status: 200,
        message: "Success update User",
      };
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      await User.findByIdAndDelete(id);
      return {
        status: 200,
        message: "Success delete User",
      };
    } catch (error) {
      throw error;
    }
  },
};
