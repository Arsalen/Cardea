module.exports = function (app) {
    var recordController = require('../controllers/recordController');

    // todoList Routes
    app.route('/record/:id')
        .get(recordController.getInfo)
        .put(recordController.updateInfo)
        .post(recordController.changeOwner);

    app.route('/record/')
        .post(recordController.signup)
        .get(recordController.getAll);
    
    app.route('/record/:id/:pkey')
        .post(recordController.changeOwner);

};