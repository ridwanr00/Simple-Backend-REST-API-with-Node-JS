import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from "express-yup-middleware";
import userSchema from './user.schema'
import userController from "./controllers/user.controller";

export const router = express.Router();

router.get("/", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Hello World");
});

router.get("/all", userController.getAllUser);

router.get("/:id",
  expressYupMiddleware({schemaValidator: userSchema.getUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
  userController.getUser);

router.post("/",
  expressYupMiddleware({schemaValidator: userSchema.addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
  userController.addUser
  );

router.put("/:id",
  expressYupMiddleware({schemaValidator: userSchema.updateUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
  userController.updateUser
);

router.delete("/:id",
  expressYupMiddleware({schemaValidator: userSchema.removeUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
  userController.removeUser);

export default router;
