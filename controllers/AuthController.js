import Users from "../models/User.js";

export const User = async (req, res) => {
  const user = await Users.find();
  // res.status(200).json(user)
  console.log("done");
  if (user) {
    res.status(404).json({ user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

export const Userpost = async (req, res) => {
  const user = await Users.create(req.body);
  // res.status(200).json(user)
  console.log("done");
  if (user) {
    res.status(404).json({ user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};
