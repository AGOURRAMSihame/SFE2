const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Supprimez la référence au client_id puisque vous utilisez Firebase Authentication

exports.authGoogle = async (req, res) => {
    try {
        const { token } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { name, email } = decodedToken;

        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ name, email });
            await user.save();
        }
        const authToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token: authToken });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
