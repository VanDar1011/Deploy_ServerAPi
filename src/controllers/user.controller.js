const UserService = require("../services/user.service");
module.exports = {
  getUserById: async function (req, res, next) {
    try {
      const { id } = req.params;
      const result = await UserService.getById(id);
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },
  getAllUser: async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      // console.log("page", page, "litmit", limit);
      const result = await UserService.getAll(page, limit);
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await UserService.create(email, password);
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { payload } = req.body;
      // console.log("id", id, "payload", payload);
      const result = await UserService.update(id, payload);
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await UserService.delete(id);
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },
};
