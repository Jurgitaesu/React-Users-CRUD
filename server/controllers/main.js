const usersDb = require('../schemas/userSchema');

const getAll = async () => {
    return usersDb.find();
}

module.exports = {
    show: async (req, res) => {
        const users = await getAll();
        res.send({success: true, message: null, users});
    },
    upload: async (req, res) => {
        const {name, age, email, password} = req.body
        const user = new usersDb();
        user.name = name;
        user.age = age;
        user.email = email;
        user.password = password;
        await user.save();
        const users = await getAll();
        res.send({success: true, message: 'Vartotojas užregistruotas', users});
    },
    delete: async (req, res) => {
        const {id} = req.params;
        await usersDb.findOneAndDelete({_id: id});
        const users = await getAll();
        res.send({success: true, message: 'Vartotojas ištrintas', users});
    },
    findUser: async (req, res) => {
        const {id} = req.params;
        let userInfo = await usersDb.find({_id: id})
        res.send({success: true, message: null, userInfo})
    },
    update: async (req, res) => {
        let user = req.body
        await usersDb.findOneAndUpdate(
            {_id: user.id},
            {
                name: user.name,
                age: user.age,
                email: user.email,
                password: user.password
            },
            {returnOriginal: false})
        const users = await getAll();
        res.send({success: true, message: "Vartotojas atnaujintas", users})
    }
}