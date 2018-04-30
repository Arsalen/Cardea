var Record = function (info) {
    if (!info) {
        this.Consultation_History = '';
        this.Prescriptions = '';
        this.Immunizations = '';
        this.Current_Medications = '';
        this.Surgical_history_Injuries = '';
        this.Allergies = '';
        this.Vital_Signs = '';
        this.Appointments = '';
        this.views = [];
    }
    else {
        this.views = info.views;
        this.Consultation_History = info.Consultation_History;
        this.Prescriptions = info.Prescriptions ;
        this.Immunizations = info.Immunizations ;
        this.Current_Medications = info.Current_Medications ;
        this.Surgical_history_Injuries = info.Surgical_history_Injuries ;
        this.Allergies = info.Allergies ;
        this.Vital_Signs = info.Vital_Signs ;
        this.Appointments = info.Appointments ;
    }
}

Record.prototype.data = {}

module.exports = Record;




