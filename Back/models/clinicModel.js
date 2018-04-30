var Clinic = function (info) {

    this.name = info.name;
    this.picURL = info.picURL;
    this.address = info.address;
    this.phonenumber = info.phonenumber;
    this.patients = info.patients;
    this.services = info.services;
    this.drugStorage = info.drugStorage;
    this.publicKey = info.publicKey;

    } 

Clinic.prototype.data = {}

module.exports = Clinic;