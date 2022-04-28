export default function handler(req, res) {
  const { q } = req.query;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    .then((response) => response.json())
    .then((data) => res.status(200).json({ data }));
}
