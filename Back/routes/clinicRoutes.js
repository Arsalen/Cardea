module.exports = function (app) {
    var clinicController = require('../controllers/clinicController');

    
    app.route('/clinic/:clinicId')
        .get(clinicController.getInfo)
        .put(clinicController.updateInfo);

    app.route('/clinic/')
        .post(clinicController.signup)
        .get(clinicController.getAll);

};