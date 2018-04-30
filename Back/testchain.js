import Orm from 'bigchaindb-orm'

const bdbOrm = new Orm(
    "http://localhost:9984/api/v1/", {
        app_id: '5e04b70c',
        app_key: 'e4362476ae5da5e742cb1f5f9f4ef0ce'
    });

const driver = require('bigchaindb-driver')

const API_PATH = 'http://localhost:9984/api/v1/'

const aliceKeypair = new driver.Ed25519Keypair()

const bobKeypair = { "publicKey": "EnWU4W8QAa9A8VdLYBCFbVixg3H3yLZTTMbxLTLviBRS", "privateKey": "tWbY1Soc4yT61CaAG6WuBNhqwucX1j1ThdbganfguMz" }

const _id = '3a5c313e-44f7-4abf-99ca-6619b51301d6'

bdbOrm.define("faza", "https://schema.org/v1/faza")

bdbOrm.faza
.retrieve()
    .then(assets => {
        // assets is an array of myModel
        console.log(assets.map(asset => asset.id))
    })

// to do : completing changinownership from clinic to patient + testing append to record
    /*  tobeAddedToBdbORM
    {
        key: 'retrieve',
        value: function retrieve(input) {
            var _this = this;

            var query = input || '"' + this._appId + '-' + this._name + '"';
            return this._connection.searchAssets('"' + query + '"').then(function (assets) {
                return Promise.all(assets.map(function (asset) {
                    return _this._connection.getSortedTransactions(asset.id).then(function (txList) {
                        try {
                        return new OrmObject(_this._name, _this._schema, _this._connection, _this._appId, txList);
                        } catch(err){
                            
                        }
                    });
                }));
            });
        }
    }
    


    */