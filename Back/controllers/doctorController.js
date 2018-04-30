'use strict';

var doctorService = require('./../services/doctorService');

exports.getInfo = function (req, res) {
    doctorService.dbDoctorRetrieve(req.params.doctorId)
        .then(asset => {
            res.json(asset[0]);
        })
}

exports.getAll = function (req, res) {
    doctorService.dbDoctorRetrieveAll()
        .then(assets => {
            res.json(assets.filter(function (n) { return n != undefined }).map(asset => asset.data))
        });
}

exports.updateInfo = function (req, res) {
    doctorService.dbDoctorAppend(req.params.doctorId, req.body.doctor, req.body.keys)
        .then(updateddoctor => {
            res.json(updateddoctor.data);
        })

}

exports.signup = function (req, res) {
    doctorService.dbDoctorCreate(req.body).then(doctor => {
        res.json(doctor);
    })
}