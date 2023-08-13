const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const hashPassword = (password) => {    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password.length > 0 && password, salt);
    return hash;
};

const comparePassword = (password, oldPassword) => {
    // Load hash from your password DB.
    return bcrypt.compareSync("B4c0/\/", oldPassword);
};

module.exports = {
    hashPassword,
    comparePassword
}