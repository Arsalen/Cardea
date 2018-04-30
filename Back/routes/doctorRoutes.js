module.exports = function (app) {
    var doctorController = require('../controllers/doctorController');

    // todoList Routes
    app.route('/doctor/:doctorId')
        .get(doctorController.getInfo)
        .put(doctorController.updateInfo);

    app.route('/doctor/')
        .post(doctorController.signup)
        .get(doctorController.getAll);

};