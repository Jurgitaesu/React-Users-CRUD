module.exports = (req, res, next) => {
    const {
        name,
        age,
        email,
        password
    } = req.body;

    function errorSend(message) {
        res.send({success: false, message});
    }

    if (name.length > 50 || name.length < 3) {
        return errorSend('Vartotojo vardas turi būti 3 - 50 simbolių ilgio');
    }

    if (typeof age === 'number' || age < 0) {
        return errorSend('Amžius turi būti skaičius');
    }

    if (!email.includes('@') || !email.includes('.')) {
        return errorSend('Elektroninis paštas turi turėti @ ir . simbolius');
    }

    if (password.length > 50 || password.length < 3) {
        return errorSend('Slaptažodis turi būti 3 - 50 simbolių ilgio');
    }

    next();
}