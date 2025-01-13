import { StatusCodes } from "http-status-codes";
import userService from "../services/user.service";
import pino from "pino";

const logger = pino();

const STATUS = {
  success: "OK",
  failure: "NO",
};

const getAllUser = (req, res) => {
  const users = userService.getAllUser();
  if (users.length) {
    return res.status(StatusCodes.OK).send(users);
  }
  logger.info('get all users')
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: "No users found.",
  });
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      data: user,
    });
  }
  logger.info(`get user ${id}`)
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `User ${id} is not found`,
  });
};

const addUser = (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);
  
  logger.info('add user')

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    message: addedUser,
  });
};

const updateUser = (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    logger.info(`update user ${id}`)
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${user.id} not found`,
    });
  }
};

const removeUser = (req, res) => {
  const { params } = req;

  const id = parseInt(params.id);
  const deletedUser = userService.removeUser(id);

  if (deletedUser == true) {
    logger.info(`remove user ${id}`);
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: `User ${id} has been deleted`,
    });
  }
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `User ${id} is not found`,
  });
};

export default {
  getAllUser,
  getUser,
  addUser,
  updateUser,
  removeUser,
};
