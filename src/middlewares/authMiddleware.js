const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Token is invalid' });
            } else {
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Token is required' });
    }
};

module.exports = requireAuth;