var express = require('express');
var router = express.Router();

var ProductModel = require('../modules/pruduct/ProductsModule');
var ProductController = require('../modules/pruduct/ProductsController');

router.post('/api/insertProducts', async function (req, res) {
  let { name, price, category, status, sizetree, origin, image } = req.body;

  await ProductController.insert(name, price, category, status, sizetree, origin, image);

  res.json({ 'status': "success" });

})

router.post('/api/getCategory', async function (req, res) {
  try {
    const { category } = req.body;
    const products = await ProductController.getCategory(category);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
})

router.post('/api/getById', async function (req, res) {
  try {
    const { id } = req.body;
    const products = await ProductController.getById(id);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
})

router.get('/api/getById', async function (req, res) {
  try {
    const { id } = req.query;
    const products = await ProductController.getById(id);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
})

router.post('/api/getByName', async function (req, res) {
  try {
    const { name } = req.body;
    const products = await ProductController.getByName(name);
    res.json(products);
  } catch (error) {
    console.log('loi api',error);
  }
})

router.get('/api/getAll', async function(req, res){
  try {
    const products = await ProductController.getAll();
    res.json(products);
  } catch (error) {
    console.log("loi getAll product", error);
  }
})

router.post('/api/delete', async function (req, res) {
  try {
    const {_id} = req.body;
    await ProductController.remove(_id);
    res.json(true);
  } catch (error) {
    
  }
})

router.post('/api/update', async function(req, res){
  try {
    const {_id, name, price, category, status, sizetree, origin, image} = req.body;
    const product = await ProductController.update(_id,name, price, category, status, sizetree, origin, image)
    res.json(product);
  } catch (error) {
    console.log("loi update", error);
  }
})



module.exports = router;