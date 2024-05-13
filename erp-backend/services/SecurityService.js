var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    secret: sails.config.jwtSettings.secret,
    issuer: sails.config.jwtSettings.issuer,
    audience: sails.config.jwtSettings.audience,

    /**
     * Hash the password field of the passed user.
     */
    hashPassword: async user => {
        if (user.password) {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(user.password, salt, function(err, hash) {
                    user.password = hash;
                });
            });
        }
    },

    /**
     * Compare user password hash with unhashed password
     * @returns boolean indicating a match
     */
    comparePassword: (password, user) => {
        return bcrypt.compareSync(password, user.password);
    },

    /**
     * Create a token based on the passed user
     * @param user
     */
    createToken: user => {
        return jwt.sign({
            user: user.toJSON()
        },
            sails.config.jwtSettings.secret,
            {
                algorithm: sails.config.jwtSettings.algorithm,
                expiresIn: sails.config.jwtSettings.expiresIn,
                issuer: sails.config.jwtSettings.issuer,
                audience: sails.config.jwtSettings.audience
            }
        );
    }
};