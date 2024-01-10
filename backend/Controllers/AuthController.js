import User from "../Models/authModel.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await newUser
      .save()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};

const createToken = (email) => {
  console.log(process.env.SECRET_KEY, "--------------->");

  // @ts-ignore
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: 30 });
};

export const loginUser = async (req, res) => {
  try {
    // @ts-ignore
    const user = await User.loginUser(req.body.email, req.body.password);

    if (!user) res.status(404).send("User or password not correct");

    const token = createToken(req.body.email);

    console.log(token);

    res.cookie("jwt", token, {
      httpOnly: false,
      path: "/"
    });

    return res.status(200).send({ email: req.body.email });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};
