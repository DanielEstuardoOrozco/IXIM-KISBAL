var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    secret: sails.config.jwtSettings.secret,
    issuer: sails.config.jwtSettings.issuer,
    audience: sails.config.jwtSettings.audience,

    /**
     * Hash the `passwordHash` field of the passed user.
     */
    hashPassword: user => {
        if (user.passwordHash) {
            user.passwordHash = bcrypt.hashSync(user.passwordHash, bcrypt.genSaltSync(10));
        }
    },

    /**
     * Compare user password hash with unhashed password
     * @returns boolean indicating a match
     */
    comparePassword: (password, user) => {
        return bcrypt.compareSync(password, user.passwordHash);
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