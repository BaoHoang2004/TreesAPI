const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    client: {
        type: ObjectId,
        ref: 'User'
    },
    status: {
        type: Number,
        required: true
    },
    product: [
        {
            productId: { type: ObjectId, ref: 'Products' },
            qty:Number
        }
    ],
  
});

module.exports = mongoose.model('Bill', BillSchema);