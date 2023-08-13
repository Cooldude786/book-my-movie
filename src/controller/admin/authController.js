const { StatusCodes } = require('http-status-codes')
const { hashPassword } = require('../../service/authService')
const Admin = require('../../models/admin')

const login = async (req, res) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			res.status(StatusCodes.BAD_REQUEST).json({ status: false, msg: 'Please provide both email and password' })
		}
		const hashedPassword = hashPassword(password);
		const createUser = await Admin.create({
			name: 'Admin',
			email,
			password: hashedPassword,
			isSuperAdmin: 1
		})
		res.status(StatusCodes.CREATED).json({ status: true, msg: 'Admin user created', data: { email, hashedPassword } })
	} catch (e) {
		console.log(e);
	}
}

module.exports = {
	login
}