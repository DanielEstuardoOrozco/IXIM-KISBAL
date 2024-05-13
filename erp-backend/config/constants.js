module.exports.constants = {
    timeZone: 'America/Guatemala',
    dateUtils: {
        standardFormatDateTime: 'YYYY-MM-DDTHH:mm:ss',
        dbFormatDateTime: 'YYYY-MM-DD HH:mm:ss.SSS',
    },
    status: {
        ERROR: "error",
        SUCCESS: "success"
    },
    error: {
        INVALID_CREDENTIALS: 'E_INVALID_CREDENTIALS',
        INVALID_TOKEN: 'E_INVALID_TOKEN',
        USER_NOT_FOUND: 'E_USER_NOT_FOUND',
        MISSING_INVALID_PARAMS: 'E_MISSING_OR_INVALID_PARAMS',
        UNIQUE_ORM: 'E_UNIQUE',
        USAGE_ORM: 'UsageError',
        ADAPTER_ORM: 'AdapterError',
        UNIQUE: 'E_UNIQUE',
        USAGE: 'E_USAGE',
        ADAPTER: 'E_ADAPTER',
        RESOURCE_NOT_FOUND: 'E_RESOURCE_NOT_FOUND',
        INTERNAL_AUTH_USER_ERROR: 'E_INTERNAL_AUTH_USER_ERROR',
        INTERNAL_ERROR: 'E_INTERNAL_ERROR'
    },
    errorMessage: {
        INVALID_CREDENTIALS: 'The credentials provided are invalid. Please check your username and password, and try again.',
        INVALID_TOKEN: 'The provided token is invalid. Please authenticate again or provide a valid token.',
        USER_NOT_FOUND: 'The requested user was not found. Please check the identifier and try again.',
        MISSING_INVALID_PARAMS: 'Required parameters are missing from your request. Please include all necessary information and try again.',
        UNIQUE_ORM: 'The provided information is already in use.',
        USAGE_ORM: 'There was an error with how the database was used in your request. Please review your data.',
        ADAPTER_ORM: 'There was an error with database configuration used in your request. Please try again.',
        USAGE: 'E_USAGE',
        ADAPTER: 'E_ADAPTER',
        RESOURCE_NOT_FOUND: 'The requested resource was not found. Please check the identifier and try again.',
        INTERNAL_AUTH_USER_ERROR: 'E_INTERNAL_AUTH_USER_ERROR',
        INTERNAL_ERROR: 'We encountered an unexpected problem. Our team has been notified and is working to resolve it. Please try again later.',
        'Error.Message.DuplicatedUser': 'A user with the provided username or email already exists. Please choose a different username or use the forgot password feature if you have already registered.',
        'Error.Message.InternalError': 'We encountered an unexpected problem. Our team has been notified and is working to resolve it. Please try again later.',
        'Error.Message.UniqueORM': 'The provided information is already in use.',
        'Error.Message.UsageORM': 'There was an error with how the database was used in your request. Please review your data.',
        'Error.Message.AdapterORM': 'There was an error with database configuration used in your request. Please try again.',
        'Error.Message.MissingInvalidParams': 'Required parameters are missing from your request. Please include all necessary information and try again.',
        'Error.Message.ExistingResource': 'The provided "{0}" is already in use. Please include all necessary information and try again.',
        'Error.Message.ResourceNotFound': 'The requested resource was not found. Please check the identifier and try again.'
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
    message: {
        'Message.AuthenticatedSuccessfully': 'Authentication successful. Welcome back!',
        'Message.CreatedSuccessfully': 'New resource has been created successfully',
        'Message.FindSuccessfully': 'Resource retrieved successfully',
        'Message.FindAllSuccessfully': 'All resources retrieved successfully',
        'Message.UpdateSuccessfully': 'The provided resource has been updated successfully',
        'Message.DeleteSuccessfully': 'The provided resource was deleted successfully',
    },
    header: {
        companyId: 'company_id',
        deviceId: 'device_id'
    }

};