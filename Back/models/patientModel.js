var Patient = function (info) {
    this.firstname = info.firstname;
    this.lastname = info.lastname;
    this.picURL = info.picURL;
    this.address = info.address;
    this.phonenumber = info.phonenumber;
    this.sex = info.sex;
    this.maritalstatus = info.maritalstatus;
    this.occupation = info.occupation;
    this.email = info.email;
    this.referral = info.referral;
    this.publicKey = info.publicKey;
    this.recordId = info.recordId;
    } 

Patient.prototype.data = {}

module.exports = Patient;


/*
{
var Patient = function (firstname,lastname,address,phonenumber,sex,maritalstatus,occupation,email,referral,publicKey,recordI) {
    this.firstname = firstname;
    this.lastnam = lastname;
    this.address = address;
    this.phonenumber = phonenumber;
    this.sex = sex;
    this.maritalstatus = maritalstatus;
    this.occupation = occupation;
    this.email = email;
    this.referral = referral;
    this.publicKey = publicKey;
    this.recordI = recordI;
    } 



fullname
birthdate
address
phonenumber
sex
marital status
occupation
email
referral
record:object => Access[] & Views[]
publicKey

}


*/