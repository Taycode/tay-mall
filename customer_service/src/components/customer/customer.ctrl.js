const CustomerCtrl = {
    async home(req, res, _next){
        return res.send('Customer Service is Live')
    }
}
module.exports = Object.freeze(CustomerCtrl);
