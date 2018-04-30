'use strict';

var recordService = require('./../services/recordService');


exports.getInfo = function (req, res) {
    recordService.dbRecordRetrieve(req.params.id)
        .then(asset => {
            res.json(asset[0]);
        })
}


exports.getAll = function (req, res) {
    recordService.dbRecordRetrieveAll()
        .then(assets => {
            res.json(assets.filter(function (n) { return n != undefined }).map(asset => asset.data))
        });
}

exports.updateInfo = function (req, res) {
    recordService.dbRecordAppend(req.params.id, req.body.record, req.body.keys)
        .then(updatedrecord => {
            res.json(updatedrecord.data);
        })

}

exports.signup = function (req, res) {
    recordService.dbRecordCreate(req.body).then(record => {
        res.json(record);
    })
}

exports.changeOwner = function (req, res) {
    let id = req.params.id;
    let pkey = req.params.pkey;
    let keys = req.body.keys;
    recordService.dbRecordChangeOwner(id, keys, pkey).then(patient => {
        res.json(patient);
    }).catch(reason =>
        res.json(reason));
}