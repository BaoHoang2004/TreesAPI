var BaoVe = require('./BaoVeModule');

const insert = async (tille, image, pageNumber) => {
    try {
        const Sach = new BaoVe({
            title: tille,
            image: image,
            pageNumber: pageNumber,
        })
        await Sach.save();
        return Sach;
    } catch (error) {
        console.log('loi', error);
    }
}

const getByName = async (title) =>{
    try {
        const Sach = await BaoVe.findOne({ title: title });
        if (Sach) {
            return Sach;
        } else {
            return null;
        }
    } catch (error) {
        
    }
}

const update = async (_id,pageNumber) =>{
    try {
        const Sach = await BaoVe.findByIdAndUpdate(_id,{pageNumber:pageNumber});
        if (Sach) {
            return Sach;
        } else {
            return false;
        }
    } catch (error) {
        
    }
}



module.exports = { insert, getByName, update }