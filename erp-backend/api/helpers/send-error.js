const { v4: uuidv4 } = require('uuid');

module.exports = {


    friendlyName: 'Send error',


    description: 'Helper that includes the necessary actions to response error:  build the message, log and send it',


    sync: true,


    inputs: {
        response: {
            description: 'response',
            type: 'ref',
            required: true
        }
    },


    fn: ({ response }, exits) => {
        return exits.success(({code, message, details}) => {
            return _.flow(
                sails.helpers.generateErrorMessage
                , sails.helpers.logging.bind(this, sails.log.error)
                , response
            )(
                code
                , sails.config.constants.errorMessage[message]
                , details
                , uuidv4()
                , sails.helpers.getErrorDocumentationUrl(code)
            );
        });
    }


};