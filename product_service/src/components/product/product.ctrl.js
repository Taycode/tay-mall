const ProductCtrl = {
    async home(req, res, _next){
        return res.send('App is Live');
    }
}
module.exports = Object.freeze(ProductCtrl);
