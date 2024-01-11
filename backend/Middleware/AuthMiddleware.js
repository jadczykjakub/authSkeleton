import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        return res.status(401).send("Wrong token");
      }
      next();
    });
  }

  if (!token) {
    res.status(401).send("No token");
    next();
  }
};
