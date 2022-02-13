const HTTP_RESPONSES = {
    ok: {
        code: 200,
        status: 'ok'
    },
    created: {
        code: 201,
        status: 'created',
    },
    badRequest: {
        code: 400,
        status: 'bad request',
    },
    badRegistrationCredentials: {
        code: 400,
        status: 'provide password or email',
    },
    unauthorized: {
        code: 401,
        status: "unauthorized"
    },
    notRegistered: {
        code: 401,
        status: "Email or password isn`t correct, please register, or enter valid data"
    },
    notFound: {
        code: 404,
        status: "not found"
    },
    conflict: {
        code: 409,
        status: "conflict, already exsists"
    },
    serverError: {
        code: 500,
        status: "server error"
    }
}

module.exports = HTTP_RESPONSES;