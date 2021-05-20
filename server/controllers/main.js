const usersDb = require('../schemas/userSchema');

const getAll = async () => {
    return usersDb.find();
}

module.exports = {
    upload: async (req, res) => {
        console.log(req.body)
        const {name, age, email, password} = req.body
        const user = new usersDb();
        user.name = name;
        user.age = age;
        user.email = email;
        user.password = password;
        await user.save();
        const users = await getAll()
        res.send({success: true, message: 'Vartotojas užregistruotas', users});
    },
}