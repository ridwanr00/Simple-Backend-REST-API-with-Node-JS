import users from "../data/users.data";

const insert = (details) => {
  const newUser = { id: users.length + 1, ...details };
  users.push(newUser);

  return newUser;
};

const get = (userId) => {
  return users.find((user) => user.id === userId);
};

const getAll = () => {
  return users;
};

const update = (userId, newDetails) => {
  let existingUser = null;
  let userIndex;

  users.map((user, index) => {
    if (user.id === userId) {
      existingUser = user;
      userIndex = index;
    }
  });

  if (!existingUser) {
    return false;
  }

  const updatedUser = {
    ...existingUser,
    ...newDetails,
  };

  users.splice(userIndex, 1, updatedUser);

  return updatedUser;
};

const remove = (userId) => {
  const index = users.findIndex((user) => user.id === userId)
  if (index >= 0) {
    users.splice(index, 1)
    return true
  } else {
    return false
  }
};

export default {
  insert,
  get,
  getAll,
  update,
  remove,
};
