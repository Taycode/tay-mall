module.exports = (app) => {
    app.use('', require('./customer'));
    return app
}
