const { extract } = require('article-parser');

module.exports = async (req, res) => {
  const articleData = await extract(req.query.url);
  res.status(200).send(articleData);
};
