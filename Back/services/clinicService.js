import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://34.217.132.241:9984/api/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver');

var Clinic = require('./../models/clinicModel')

//const recordService = require('./recordService')

//const Master = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" };

var _clinic;

bdbOrm.define("Clinic");

exports.dbClinicRetrieve = function (id) {
    console.log('sending retrieve clinic by ' + id);
    return bdbOrm.Clinic.retrieve(id)
}

exports.dbClinicRetrieveAll = function () {
    console.log('retrieving all clinics:');
    //console.log(JSON.stringify(bdbOrm.Clinic.retrieveAll()));
    return bdbOrm.Clinic.retrieve()
}

exports.dbClinicCreate = function (info) {
    console.log('creating this clinic: ' + info);
    const keys = new driver.Ed25519Keypair();
    console.log(keys);

    _clinic = new Clinic(info);
    _clinic.publicKey = keys.publicKey;

    return bdbOrm.Clinic.create({
        keypair: keys,
        data: _clinic
    })

}

exports.dbClinicAppend = function (id, info, keys) {
    console.log('appending this info to clinic: ' + info);
    return bdbOrm.Clinic.retrieve(id)
        .then(asset => {
            console.log(asset[0].data)
            return asset[0].append({
                toPublicKey: keys.publicKey,
                keypair: keys,
                data: info
            })
        })
}


