const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BaoVeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: { type: String },
    pageNumber: { type: Number, default: 0 }
})

module.exports = mongoose.model('BaoVe', BaoVeSchema);