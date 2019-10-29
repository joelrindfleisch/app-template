module.exports = function (app) {
    app.get('/api/otherRoute', function(req, res) {
        res.send(JSON.stringify('Other Route'));
    });
};