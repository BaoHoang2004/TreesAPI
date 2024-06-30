var Admin = require('./AdminModule');

const login = async (email, password) => {
    try {
        const admin = await Admin.findOne({ email: email, password: password });
        if (admin) {
            return admin;
        }
        return null;

    } catch (error) {
        console.log('Login not found', error);
    }
}

const insert = async (name, email, password) => {
    try {
        const admin = new Admin({
            name: name,
            email: email,
            password: password,
        })
        await admin.save();
        return true;
    } catch (error) {
        console.log("error insert admin", error);
    }
}

const changePassword = async (email, oldpassword, newPassword) => {
    try {
        const admin = await Admin.findOne({ email: email, password: oldpassword });
        if (admin) {
            admin.password = newPassword;
            await admin.save();
            return true;
        } else {
            return true;
        }
    } catch (error) {
        console.log("error changePassword", error);
    }
}

module.exports = { login, insert, changePassword }