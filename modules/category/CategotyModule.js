const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parentId: { type: ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Category', CategorySchema)