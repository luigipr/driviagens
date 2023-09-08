export function unprocessableError(resource) {
    return {
        type: "UnprocessableEntity",
        message: `unable to process ${resource}`
    }
}