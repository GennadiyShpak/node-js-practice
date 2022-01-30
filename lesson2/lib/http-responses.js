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
    unauthorized: {
        code: 401,
        status: "unauthorized"
    },
    notFound: {
        code: 404,
        status: "not found"
    },
    conflict: {
        code: 409,
        status: "conflict"
    },
    serverError: {
        code: 500,
        status: "server error"
    }
}

module.exports = HTTP_RESPONSES;