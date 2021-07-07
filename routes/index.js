let express = require('express');
const { sequelize } = require('../database/db');
let router = express.Router();

sequelize.sync({ force: false }).then((result) => {
  console.log("connected db");
})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Migrations Project' });
});

module.exports = router;