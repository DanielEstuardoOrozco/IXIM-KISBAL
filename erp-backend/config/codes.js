module.exports.codes = {
    timeZone: 'America/Guatemala',
    utils: {
        standardFormatDateTime: 'YYYY-MM-DDTHH:mm:ss',
        dbFormatDateTime: 'YYYY-MM-DD HH:mm:ss.SSS',
    },
    error: {
        invalidCredentials: 'E_INVALID_CREDENTIALS',
        uniqueORM: 'E_UNIQUE',
        entityNotFound: 'E_ENTITY_NOT_FOUND',
        missingInvalidParams: 'E_MISSING_OR_INVALID_PARAMS',
        usageORM: 'UsageError',
        adapterORM: 'AdapterError',
        usage: 'E_USAGE',
        adapter: 'E_ADAPTER',
        resourceNotFound: 'E_RESOURCE_NOT_FOUND',
        internalAuthEntity: 'E_INTERNAL_AUTH_ENTITY_ERROR'
    },
    errorCodes: {
        undefinedSchema: "000",
        dbFailConection: "001",
        invalidCountry: "002",
        missingDUCAF: "003",
        failedToStorageFile: "004",
        invalidSuppordDocumentType: "005",
        invalidFileName: "006",
        missingSupportDocumentToDelete: "007",
        missingSupportDocument: "008",
        invalidAuthentication: "009",
        dataBaseConstraintFail: "010",
        internalError: "011",
        alreadyAuthorized: "012",
        forbiddenMethod: "013"
    },
    header: {
        appId: 'COMPANY_ID',
        deviceId: 'device-id'
    }

};