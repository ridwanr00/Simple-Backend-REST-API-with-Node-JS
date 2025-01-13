import userDao from "../models/persistence/user.dao";

const getUser = (userId) => {
  return userDao.get(userId);
};

const getAllUser = (userId) => {
    return userDao.getAll(userId)
};

const addUser = (details) => {
  return userDao.insert(details);
};

const updateUser = (userId, details) => {
  return userDao.update(userId, details);
};

const removeUser = (userId) => {
  return userDao.remove(userId);
};

export default {
  getUser,
  getAllUser,
  updateUser,
  addUser,
  removeUser,
};
