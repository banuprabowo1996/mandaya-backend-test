function errorHandler(err, req, res, next) {
    console.error(err)
    let status = 500
    let msg = "Internal server error"

    res.status(status).json({
        message: msg
    })
}

module.exports = errorHandler