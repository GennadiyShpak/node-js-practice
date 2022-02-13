const errorHandler = (err, req, res, next) => {
    console.log('errorHandler',err);
}

module.exports = errorHandler;