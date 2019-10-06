import User from "../models/User";

export default async (req, res, next) => {
  const { user_id } = req.headers;

  if (!user_id) {
    return res.status(400).json({ error: "User not specified!" });
  }
  const user = await User.findById(user_id);

  if (!user) {
    return res.status(400).json({ error: "User not register!" });
  }

  return next();
};
