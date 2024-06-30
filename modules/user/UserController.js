var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')

var UserModule = require('./UserModule');

const login = async (email, password) => {
    try {
        const user = await UserModule.findOne({ email: email });
        if (user) {
            const isMath = await bcrypt.compare(password, user.password);
            if (isMath) {
                return user;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

const register = async (name, email, phone, password) => {
    try {
        let bcryptPassword = await bcrypt.hash(password, 10);

        let newUser = new UserModule({
            name: name,
            email: email,
            phone: phone,
            password: bcryptPassword,
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

const checkEmail = async (email) =>{
    try {
        let existingUser = await UserModule.findOne({email: email});
        if (existingUser) {
            return false;
        }
        return true;
    } catch (error) {
        console.log("loi check email", error);
        return false;
    }
}

const changePassword = async (email, oldpassword, newPassword) => {
    try {
        const user = await UserModule.findOne({ email: email, password: oldpassword });
        if (user) {
            const bcryptPassword = await bcrypt.hash(newPassword, 10);
            user.password == bcryptPassword;
            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

const changeUser = async (email, newName, newPhone) => {
    try {
        const user = await UserModule.findOne({ email: email });
        if (user) {
            user.name = newName;
            user.phone = newPhone;
            await user.save();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login, register, changePassword, checkEmail, changeUser }