import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("elo");

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      console.log("is token");
      if (err) {
        console.log("is error token");

        return res.status(401).send("Wrong token");
      }

      next();
    });
  }

  if (!token) {
    console.log("is not token");

    res.status(401).send("No token");
    next();
  }
};
