import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://34.217.132.241:9984/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver');

var Doctor = require('./../models/doctorModel')

//const Master = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" };

var _doctor;

bdbOrm.define("Doctor")

exports.dbDoctorRetrieve = function (id) {
    console.log('sending retrieve doctor by:' + id);
    return bdbOrm.Doctor.retrieve(id)
}


exports.dbDoctorRetrieveAll = function () {
    console.log('retrieving all doctors');
    return bdbOrm.Doctor.retrieve()
}

exports.dbDoctorCreate = function (info) {
    console.log('creating this doctor:' + info);
    const keys = new driver.Ed25519Keypair();

    _doctor = new Doctor(info);
    _doctor.publicKey = keys.publicKey;

    return bdbOrm.Doctor.create({
        keypair: keys,
        data: _doctor
    })
}

exports.dbDoctorAppend = function (id, info, keys) {
    console.log('appending this info to doctor :' + info);
    return bdbOrm.Doctor.retrieve(id)
        .then(asset => {
            console.log(asset[0].data)
            return asset[0].append({
                toPublicKey: keys.publicKey,
                keypair: keys,
                data: info
            })
        })
}