var express = require('express');
var router = express.Router();

var CategoryModule = require('./CategotyModule');


const getAll = async () => {
    try {
        const categories = await CategoryModule.find();
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const getParent = async () => {
    try {
        const categories = await CategoryModule.find({ parentId: null });
        return categories;
    } catch (error) {
        console.log(error);
    }
}
const getById = async (id) => {
    try {
        const categories = await CategoryModule.findOne({ _id: id });
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const getSub = async (parentId) => {
    try {
        const categories = await CategoryModule.find(parentId).populate('paretnId', '_id name'); // hiển thị name của parent
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const insert = async (name, parentId) => {
    try {
        const categories = new CategoryModule({ name: name, parentId: parentId });
        await categories.save();
        return categories;
    } catch (error) {
        console.log("loi insert", error);
    }
}

const update = async (CatId, name, parentId) => {
    try {
        const categories = await CategoryModule.findByIdAndUpdate(CatId, { name: name, parentId: parentId });
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (CatId) => {
    try {
        await CategoryModule.deleteOne({ _id: CatId })
    } catch (error) {

    }
}

module.exports = { getAll, getParent, getSub, insert, update, remove, getById };