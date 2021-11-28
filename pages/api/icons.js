export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.flaticon.com/editor/icon/svg/" + req.query.id,
      { headers: { cookie: req.query.cookie } }
    );
    if (response.status == 404)
      res.status(404).json({ message: "expired token" });
    else if (response.status == 429)
      res.status(429).json({ message: "too many requests!" });
    else {
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong!" });
  }
}
//
