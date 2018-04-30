module.exports = function (app) {
    var patientController = require('../controllers/patientController');

    // todoList Routes
    app.route('/patient/:patientId')
        .get(patientController.getInfo)
        .put(patientController.updateInfo);

    app.route('/patient/')
        .post(patientController.signup)
        .get(patientController.getAll);

};