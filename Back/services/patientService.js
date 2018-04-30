import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://34.217.132.241:9984/api/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver');

var Patient = require('./../models/patientModel')

const recordService = require('./recordService')

//const Master = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" };

var _patient;

bdbOrm.define("Patient");

exports.dbPatientRetrieve = function (id) {
    console.log('sending retrieve patient by :' + id);
    return bdbOrm.Patient.retrieve(id)
}


exports.dbPatientRetrieveAll = function (id) {
    console.log('retrieving all patients');
    return bdbOrm.Patient.retrieve()
}



exports.dbPatientCreate = function (info) {
    console.log('creating this patient:' + info);
    const keys = new driver.Ed25519Keypair();
    console.log(keys);
    return recordService.dbRecordCreate(keys).then(asset => {
        _patient = new Patient(info);
        _patient.publicKey = keys.publicKey;
        _patient.recordId = asset.id;
        return bdbOrm.Patient.create({
            keypair: keys,
            data: _patient
        })
    })
}

exports.dbPatientAppend = function (id, info, keys) {
    console.log('appending this info:' + info);
    return bdbOrm.Patient.retrieve(id)
        .then(asset => {
            return asset[0].append({
                toPublicKey: keys.publicKey,
                keypair: keys,
                data: infokeys.publicKey
            })
        })
}

