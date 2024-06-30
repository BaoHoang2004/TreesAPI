var express = require('express');
var router = express.Router();

var Admin = require('../modules/admin/AdminController');


router.post('/login', async function (req, res) {
  const { email, password } = req.body;
  const admin = await Admin.login(email, password);
  if (admin) {
    res.json({ 'login': 'thanhcong' });
    res.json(admin);
  } else {
    res.json({ 'login': 'that bai' });
    res.json(admin);
  }
})

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
