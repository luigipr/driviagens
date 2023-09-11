export function badRequestError(resource) {
    return {
        type: "badRequest",
        message: `Invalid ${resource} value`
    }
}