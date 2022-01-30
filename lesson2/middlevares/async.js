const asyncHandler = (fn) => (req, res, next) => {
    console.log('resolve');
    return Promise.resolve(fn(req, res, next)).catch(next)
};

module.exports = asyncHandler;