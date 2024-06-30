const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const ProductSchema = new Schema({
    name: { type: String, require: true }, // tên của cây
    price: { type: Number, require: true }, //giá của cây
    category: { type: ObjectId, ref:'Category' }, // category
    status: { type: String, require: true }, // trạng thái số lượng của cây
    sizetree: { type: String, require: true }, // Độ lớn của cây   
    origin: { type: String, require: true }, // xuất xứ của cây
    image:[
            {
                type: String,
                require: true
            },
        ], // hình ảnh cây
});

module.exports = mongoose.model('Products', ProductSchema);