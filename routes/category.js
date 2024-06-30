var express = require('express');
var router = express.Router();

const CategoriesController = require('../modules/category/categoryController');

router.get('/api/getAll', async function (req, res) {
    const getAll = await CategoriesController.getAll();
    res.status(200).json(getAll);
});

router.post('/api/add', async function (req, res) {
    try {
        const { name, parentId } = req.body;
        if (parentId ==="") {
            const categories = await CategoriesController.insert(name,null );
            res.json(categories)
        } else {
            const categories = await CategoriesController.insert( name, parentId );
        if (categories) {
            res.json(categories)
        } else {
            res.json('loi')
        }
        }
        


    } catch (error) {
        console.log(error);
    }

})

router.get('/api/getParent', async function (req, res) {
    try {
        const categories = await CategoriesController.getParent();
        res.status(200).json(categories)
    } catch (error) {
        console.log("loi", error);
    }
})

router.get('/api/getById', async function (req, res) {
    try {
        const {id} = req.query;
        const categories = await CategoriesController.getById(id);
        res.status(200).json(categories)
    } catch (error) {
        console.log("loi", error);
    }
})

module.exports = router;