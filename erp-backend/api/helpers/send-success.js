module.exports = {


    friendlyName: 'Send success',


    description: 'Helper that includes the necessary actions to response success:  build the message, log and send it',


    sync: true,


    inputs: {
        response: {
            description: 'Response Function',
            type: 'ref',
            required: true
        }
    },


    fn: ({ response }, exits) => {
        return exits.success((message, data, meta) => {
            return _.flow(
                sails.helpers.generateSuccessMessage
                , sails.helpers.logging.bind(this, sails.log.info)
                , response
            )(message, data, meta);
        });
    }


};

