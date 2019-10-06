import * as Yup from "yup";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
