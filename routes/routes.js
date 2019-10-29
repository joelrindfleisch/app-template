module.exports = function(app){
    require('./other-routes')(app);

    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
};
