const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        console.log("Request body:", req.body);  // Log pour vérifier le corps de la requête
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Invalid email or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid email or password.');
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
