module.exports = {

    friendlyName: 'Replace',

    description: 'String utils to replace {n} values inside a string',

    inputs: {
        Text: {
            description: 'Original text',
            type: 'string',
            required: true
        },
        Values: {
            description: 'Values to be replaced',
            type: 'ref',
            required: true
        }
    },

    fn: async ({ Text, Values }, exits) => {
        Values.forEach((element, i) => {
            Text = Text.replace(`{${i}}`, element)
        });
        return exits.success(Text);
    }
};

