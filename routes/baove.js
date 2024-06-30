var express = require('express');
var router = express.Router();
var BaoVe = require('../modules/baove/BaoVeController')


router.post('/insert', async function (req, res) {
    try {
        const { title, image, pageNumber } = req.body;
        const Sach = await BaoVe.insert(title, image, pageNumber);
        if (Sach) {
            res.json(Sach);
        } else {
            return false;
        }

    } catch (error) {

    }
})

router.post('/getByTitle', async function(req, res){
    try {
        const {title} = req.body;
        const Sach = await BaoVe.getByName(title);
        if (Sach) {
            res.json(Sach);
        } else {
            res.json("Không tìm thất sách");
        }
    } catch (error) {
        
    }
})

router.post('/update', async function(req, res){
    try {
        const {_id, pageNumber} = req.body;
        const Sach = await BaoVe.update(_id, pageNumber);
        if (Sach) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    } catch (error) {
        
    }
})

router.put('/update', async function(req, res){
    try {
        const {_id, pageNumber} = req.body;
        const Sach = await BaoVe.update(_id, pageNumber);
        if (Sach) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    } catch (error) {
        
    }
})

module.exports = router;