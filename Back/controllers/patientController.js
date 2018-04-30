'use strict';

var patientService = require('./../services/patientService');

exports.getInfo = function (req, res) {
    patientService.dbPatientRetrieve(req.params.patientId)
        .then(asset => {
            res.json(asset[0]);
        })
}


exports.getAll = function (req, res) {
    patientService.dbPatientRetrieveAll()
        .then(assets => {
            res.json(assets.filter(function (n) { return n != undefined }).map(asset => asset.data))
        });
}


exports.updateInfo = function (req, res) {
    patientService.dbPatientAppend(req.params.patientId, req.body.patient, req.body.keys)
        .then(updatedpatient => {
            res.json(updatedpatient.data);
        })

}

exports.signup = function (req, res) {
    patientService.dbPatientCreate(req.body).then(patient => {
        res.json(patient);
    })
}