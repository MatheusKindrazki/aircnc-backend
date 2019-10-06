import Spot from "../models/Spot";
import User from "../models/User";

class SpotController {
  async index(req, res) {
    const { tech } = req.query

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(",").map(tech => tech.trim())
    });

    return res.json(spot);
  }
}

export default new SpotController();
