var express = require('express');
var router = express.Router();

var BillModule = require('./BillModule');


const getAll = async () => {
    try {
        const bill = await BillModule.find();
        return bill;
    } catch (error) {
        console.log(error);
    }
}

const getCart = async (client) => {
    try {
        const bill = await BillModule.findOne({ client: client, status: 2 });
        if (bill) {
            return bill.product
        } else {
            console.log('loi');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

const getById = async (id) => {
    try {
        const bill = await BillModule.findOne({_id: id});
        if (bill) {
            return bill;
        } else {
            console.log('loi');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

const getHistory = async (client) => {
    
    try {
        const bill = await BillModule.find({ client: client, status: 1 });
        if (bill) {
            return bill;
        } else {
            console.log('loi');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}


const insert = async (client, status, product, date) => {
    try {
        const bill = new BillModule({
            client: client,
            status: status,
            product: product,
            date: date || new Date()
        });
        await bill.save();
        return bill;
    } catch (error) {
        throw error;
    }
}

const update = async (_id, date, status, product) => {
    try {
        const bill = new BillModule(_id, { date, client, status, product });
        await bill.save();
        return bill;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (BillId) => {
    try {
        await BillModule.deleteOne({ _id: BillId });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAll, insert, update, remove, getCart, getHistory, getById };