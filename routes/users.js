var express = require('express');
var router = express.Router();

var User = require('../modules/user/UserModule');
var AdminModule = require('../modules/admin/AdminModule');
var UserController = require('../modules/user/UserController')


router.get('/login', async function (req, res) {
  const { email, password } = req.query;
  const user = await UserController.login(email, password);
  if (user) {
    res.json(user);
  } else {
    res.json({ 'status': 'Dang nhap that bai' });
  }

});
router.post('/login', async function (req, res) {
  const { email, password } = req.body;
  const user = await UserController.login(email, password);
  res.json(user);
})

router.post('/register', async function (req, res) {
  try {
    let { name, email, phone, password } = req.body;
    const checkEmail = await UserController.checkEmail(email);
    if (checkEmail) {
      const user = await UserController.register(name, email, phone, password);
      res.status(200).json({ status: 'success', message: 'Đăng ký thành công', user });
    } else {
      res.json({ status: 'email trung', message: 'Email đã tồn tại' });
    }

  } catch (error) {
    console.log('loi dang ky', error);
    // res.status(500).json({ error: 'Lỗi trong quá trình xử lý yêu cầu' });
  }
})

router.post('/api/changeUser', async function (req, res) {
  try {
    const {email, newName, newPhone} = req.body;
    const user = await UserController.changeUser(email, newName, newPhone);
    if (user) {
      res.status(200).json({ status: 'success', message: 'Cập nhật thành công', user });
    } else {
      res.json({ status: 'false', message: 'Cập nhật thất bại' });
    }
  } catch (error) {
    console.log('Lỗi cập nhật thong tin User', error);
  }
})

module.exports = router;
