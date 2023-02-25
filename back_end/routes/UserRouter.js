import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/logincount',
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    if (users) {
      res.send(users);
      return;
    }
    res.status(404).send({ message: 'Users not found!' });
  })
);

userRouter.put(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const users = await User.findOne({
      email: req.body.email,
      rollno: req.body.rollno,
    });
    if (users) {
      res.status(404).send({ message: 'Already registered!' });
      return;
    }
    const user = new User({
      rollno: req.body.rollno,
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      year: req.body.year,
      section: req.body.section,
    });
    const data = await user.save();
    res.send({
      rollno: data.rollno,
      name: data.name,
      email: data.email,
      department: data.department,
      year: data.year,
      section: data.section,
      token: generateToken(data),
    });
    return;
  })
);

export default userRouter;
