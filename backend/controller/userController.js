import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function createUser(req, res) {
  const newUserData = req.body;

  if (newUserData.type == "admin") {
    if (req.user == null) {
      res.json({
        message: "Please login as an administrator to create an admin account",
      });
      return;
    }
    if (req.user.type != "admin") {
      res.json({
        message: "Please login as an administrator to create an admin account",
      });
      return;
    }
  }

  newUserData.password = bcrypt.hashSync(newUserData.password, 8);

  const user = new User(newUserData);
  user
    .save()
    .then(() => {
      res.json({
        message: "User created",
      });
    })
    .catch(() => {
      res.json({
        message: "User not created",
      });
    });
}

export function loginUser(req, res) {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length == 0) {
      res.json({
        message: "User not found",
      });
    } else {
      const user = users[0];
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isBlocked: user.isBlocked,
            type: user.type,
            profilePicture: user.profilePicture,
          },
          process.env.JWT_SECRET_KEY
        );
        res.json({
          message: "User logged in",
          token: token,
        });
      } else {
        res.json({
          message: "User not logged in Password Incorrect ",
        });
      }
    }
  });
}
