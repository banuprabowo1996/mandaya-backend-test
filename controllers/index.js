const { User } = require('../models/index')
const bcrypt = require('bcryptjs');

class Controller {
    static async register(req, res, next) {
        try {
            let { phoneNumber, gender, dateOfBirth, ktp, password } = req.body
            password = bcrypt.hashSync(password)
            const newUser = User.create({
                username: phoneNumber,
                gender,
                dateOfBirth,
                ktp,
                password
            })
            if (!newUser) throw { name: 'register error' }
            res.status(200).json({
                username: phoneNumber,
                gender,
                message: "register successfully"
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller