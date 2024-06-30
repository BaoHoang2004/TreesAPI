var express = require('express');
var router = express.Router();
const BillController = require('../modules/bill/BillController');

router.get('/api/getAll', async function (req, res) {
    try {
        const bill = await BillController.getAll();
        res.json(bill)
    } catch (error) {
        console.log('loi getAll Bill', error);
    }
})

router.post('/api/getCart', async function (req, res) {
    try {
        const { client } = req.body;
        const bill = await BillController.getCart(client);
        console.log('product',bill);
        if (bill ) {
            res.json(bill);
        }else{
            res.json([]);
        }

    } catch (error) {
        console.log('loi getCart Bill', error);
    }
})

router.post('/api/getById', async function (req, res) {
    try {
        const { id } = req.body;
        const bill = await BillController.getById(id);
        if (bill) {
            res.json(bill.product);
        }else{
            res.json([]);
        }

    } catch (error) {
        console.log('loi getCart Bill', error);
    }
})

router.post('/api/getHistory', async function (req, res) {
    try {
        const { client } = req.body;
        const bill = await BillController.getHistory(client);
        res.json(bill)
    } catch (error) {
        console.log('loi getAll Bill', error);
    }
})

router.post('/api/insertCart', async function (req, res) {
    try {
        // status:1 đã thanh toán,
        // status:2 chưa thanh toán
        const { client, status, product, date } = req.body;
        if (!status) {
            throw new Error('Thiếu trường "status"');
        }
        const bill = await BillController.insert(client, 2, product, date);
        res.json(bill)
    } catch (error) {
        console.log('loi insert bill', error);
    }
})



module.exports = router;