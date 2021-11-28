const got = require("got");

module.exports.get = async (req, res) => {
  try {
    const response = await got(
      "https://www.flaticon.com/editor/icon/svg/" + req.query.id,
      { headers: { cookie: req.query.cookie } }
    );

    const data = JSON.parse(response.body);
    res.status(200).json(data);
  } catch (error) {
    if (error.response.statusCode == 404)
      res.status(404).json({ message: "expired token" });
    else if (error.response.statusCode == 429)
      res.status(429).json({ message: "too many requests!" });
    else res.status(400).json({ message: "something went wrong!" });
  }
};
