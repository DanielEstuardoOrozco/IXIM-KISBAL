module.exports = {


    friendlyName: 'Health Endpoint',


    description: 'Verify if endpoint status.',


    fn: async ({ }, exits) => {
        let { success } = exits;
        let dbFlag;

        try {
            dbFlag = await sails.helpers.validation.dbStatus();
        } catch (err) { }

        return success({
            statusAPI: "UP",
            statusDB: dbFlag ? "UP" : "DOWN"
        });

    }


};
