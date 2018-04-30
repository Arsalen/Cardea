import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://34.217.132.241:9984/api/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver');

var Record = require('./../models/recordModel')

const patientService = require('./patientService')

//const Master = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" };

var _record;

bdbOrm.define("Record")

exports.dbRecordRetrieve = function (id) {
    console.log('sending retrieve record by' + id);
    return bdbOrm.Record.retrieve(id)
}


exports.dbRecordRetrieveAll = function () {
    console.log('retrieving all record');
    return bdbOrm.Record.retrieve()
}

exports.dbRecordCreate = function (keys) {
    _record = new Record(null);
    console.log('creating this record:' + _record);
    return bdbOrm.Record.create({
        keypair: keys,
        data: _record
    })
}

//Adding to the record (id=patient / info=added Info / keys = Owner keypair  )
exports.dbRecordAppend = function (id, info, keys) {
    console.log('appending this info:' + info);
    return patientService.dbPatientRetrieve(id)
        .then(patient => {
            return bdbOrm.Record.retrieve(patient[0].data.recordId)
                .then(asset => {
                    return asset[0].append({
                        toPublicKey: keys.publicKey,
                        keypair: keys,
                        data: info
                    })
                })
        })
}

exports.dbRecordChangeOwner = function (id,keys,pkey) {
    console.log('changing ownership');
    return patientService.dbPatientRetrieve(id)
        .then(asset => {
            let publicKey = pkey || asset[0].data.publicKey;
            
            
            return bdbOrm.Record.retrieve(asset[0].data.recordId)
                .then(record => {
                    return record[0].append({
                        toPublicKey: publicKey,
                        keypair: keys,
                        data: null
                    })
                })
        })
}
