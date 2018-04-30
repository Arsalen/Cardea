var Doctor = function (info) {
    this.firstname = info.firstname;
    this.lastname = info.lastname;
    this.address = info.address;
    this.phonenumber = info.phonenumber;
    this.sex = info.sex;
    this.maritalstatus = info.maritalstatus;
    this.email = info.email;
    this.publicKey = info.publicKey;
    } 

Doctor.prototype.data = {}

module.exports = Doctor;