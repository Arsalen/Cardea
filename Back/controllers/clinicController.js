'use strict';

var clinicService = require('./../services/clinicService');

exports.getInfo = function (req, res) {
    clinicService.dbClinicRetrieve(req.params.clinicId)
        .then(asset => {
            res.json(asset[0]);
        })
}


exports.getAll = function (req, res) {
    clinicService.dbClinicRetrieveAll()
        .then(assets => {
            res.json(assets.filter(function (n) { return n != undefined }).map(asset => asset.data))
        });

}

exports.updateInfo = function (req, res) {
    clinicService.dbClinicAppend(req.params.clinicId, req.body.clinic, req.body.keys)
        .then(updatedclinic => {
            res.json(updatedclinic.data);
        })

}

exports.signup = function (req, res) {
    clinicService.dbClinicCreate(req.body).then(clinic => {
        res.json(clinic);
    })
}