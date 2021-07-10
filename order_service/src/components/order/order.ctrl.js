const OrderCtrl = {
    async home(req, res, _next){
        return res.send('Order Service is Live');
    }
}
module.exports = Object.freeze(OrderCtrl);
