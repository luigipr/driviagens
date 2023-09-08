export function badRequestError(resource) {
    return {
        type: "badRequest",
        message: `something went wrong with your ${resource}!`
    }
}