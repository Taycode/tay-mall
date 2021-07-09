module.exports = (app) => {
    app.use('', require('./product'));
    return app
}
