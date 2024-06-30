const ProductModel = require('./ProductsModule');

const getAll = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  }
  catch (error) {
    console.log(error);
  }
}

const getCategory = async (category) => {
  try {
    const products = await ProductModel.find({ category: category });
    return products;
  } catch (error) {
    console.log(error);
  }
}

const getById = async (id) => {
  console.log(id);
  try {
    const products = await ProductModel.findOne({ _id: id });
    return products;
  } catch (error) {
    console.log(error);
  }
}

const getByName = async (name) => {
  try {
    const newName = new RegExp(name,'i');
    const products = await ProductModel.find({name: {$regex: newName}});
    return products;
  } catch (error) {
    console.log('loi',error);
  }
}


const insert = async (name, price, category, status, sizetree, origin, image) => {
  try {
    const products = new ProductModel({ name, price, category, status, sizetree, origin, image });
    await products.save();
    return products
  }
  catch (error) {
    console.log(error);
  }
}

const update = async (_id, name, price, category, status, sizetree, origin, image) => {
  try {
    const products = await ProductModel.findByIdAndUpdate(_id, { name: name, price:price, category: category, status: status, sizetree: sizetree, origin: origin, image: image });
    return products;
  }
  catch (error) {
    console.log(error);
  }
}

const updatepr = async (_id, origin) => {
  try {
    const a = await ProductModel.find({});
    if (a) {
      const products = await ProductModel.findByIdAndUpdate(_id,{origin:origin});
    return products;
    }
    return false;
  }
  catch (error) {
    console.log(error);
  }
}

const remove = async (ProductId) => {
  try {
    await ProductModel.deleteOne({ _id: ProductId });
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, insert, update, remove, getCategory, getById, updatepr, getByName }
// module.exports = router;