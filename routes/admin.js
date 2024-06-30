var express = require('express');
var router = express.Router();
var Admin = require('../modules/admin/AdminController');


router.post('/api/login', async function (req, res) {

    const { email, password } = req.body;
    const admin = await Admin.login(email, password);
    if (admin) {
        res.status(200).json({ status: 'success', message: 'Đăng nhập thành công', admin });
    } else {
        res.json({ status: 'false', message: 'Đăng nhập lỗi' });
    }
})

router.get('/login', function (req, res) {
    res.render('login', { msg: 'Login' });
})

module.exports = router;