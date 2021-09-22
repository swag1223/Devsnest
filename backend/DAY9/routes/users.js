var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/images/:name', (req, res) => {
  const name = req.params.name;
  res.sendFile(path.join(__dirname , `../public/images/${name}`))
})

router.get('/:file/:name', (req, res) => {
  const { file, name } = req.params;
  res.sendFile(path.join(__dirname , `../public/${file}/${name}`))
})
module.exports = router;
