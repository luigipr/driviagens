export function unprocessableError(resource) {
    return {
        type: "Unprocessable Entity",
        message: `unable to process ${resource}`
    }
}