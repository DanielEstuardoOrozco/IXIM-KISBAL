/**
 * Passport configuration file where you should configure strategies
 */
const userPassport = require('passport');
const adminPassport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const basicStrategy = require('passport-http').BasicStrategy;

const EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
const USER_SECRET = process.env.JWT_USER_SECRET;
const ALGORITHM = process.env.JWT_ALGORITHM;
const ISSUER = process.env.JWT_ISSUER;
const USER_AUDIENCE = process.env.JWT_USER_AUDIENCE;
const ADMIN_AUDIENCE = process.env.JWT_ADMIN_AUDIENCE;

/**
 * Configuration object for user JWT strategy
 */
const USER_JWT_STRATEGY_CONFIG = {
    secretOrKey: USER_SECRET,
    issuer: ISSUER,
    audience: USER_AUDIENCE,
    passReqToCallback: false,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

/**
 * Configuration object for admin JWT strategy
 */
const ADMIN_JWT_STRATEGY_CONFIG = {
    secretOrKey: ADMIN_SECRET,
    issuer: ISSUER,
    audience: ADMIN_AUDIENCE,
    passReqToCallback: false,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

/**
 * Configuration object for local strategy
 */
const BASIC_STRATEGY_CONFIG = {
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
};

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onUserJwtStrategyAuth(payload, next) {
    let user = payload.user;
    return next(null, user, {});
}

/**
 * Triggers when admin authenticates via JWT strategy
 */
function _onAdminJwtStrategyAuth(payload, next) {
    let admin = payload.admin;
    return next(null, admin, {});
}

/**
 * Triggers when user authenticates via local strategy
 */
function _onBasicStrategyAuth(req, username, password, next) {
    User.findOne({
        email: username,
        company: Number(req.headers[sails.config.constants.header.companyId]),
        state: 1
    }).exec(function (error, user) {
        if (error) return next(error);

        if (!user) return next(null, false);

        if (!SecurityService.comparePassword(password, user)) return next(null, false);

        return next(null, user);
    });
}

userPassport.use(
    new basicStrategy(BASIC_STRATEGY_CONFIG, _onBasicStrategyAuth));

userPassport.use('user-jwt',
    new jwtStrategy(USER_JWT_STRATEGY_CONFIG, _onUserJwtStrategyAuth));

adminPassport.use('admin-jwt',
    new jwtStrategy(ADMIN_JWT_STRATEGY_CONFIG, _onAdminJwtStrategyAuth));

module.exports.jwtSettings = {
    expiresIn: `${EXPIRES_IN}m`,
    secret: USER_SECRET,
    algorithm: ALGORITHM,
    issuer: ISSUER,
    audience: USER_AUDIENCE
};