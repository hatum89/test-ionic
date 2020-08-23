
export class UserModel {

    private phone_number: number;
    private names: string;
    private last_names: string;
    private first_name: string;
    private second_name: string;
    private first_last_name: string;
    private second_last_name: string;
    private document_id: number;
    private document_number: number;
    private document_type: number;
    private document_expiration_date: string;
    private birth_date: string;
    private gender_id: number;
    private gender: string;
    private state_id: number;
    private city_id: number;
    private address: string;
    private pin: number;
    private email: string;
    private imei: string;
    private push_registration_id: number;
    private topic_registration_id: number;
    private referrer_phonenumber: number;
    private parent_info: string;
    private query_id: string;
    private bool: boolean;

    constructor() {
        this.address = null;
        this.birth_date = null;
        this.city_id = null;
        this.document_expiration_date = null;
        this.document_id = null;
        this.document_number = null;
        this.email = null;
        this.gender_id = null;
        this.gender = null;
        this.imei = null;
        this.last_names = null;
        this.names = null;
        this.first_name = null;
        this.second_name = null;
        this.first_last_name = null;
        this.second_last_name = null;
        this.parent_info = null;
        this.phone_number = null;
        this.pin = null;
        this.push_registration_id = null;
        this.query_id = null;
        this.referrer_phonenumber = null;
        this.state_id = null;
        this.topic_registration_id = null;
        this.bool = null;

    }

    public set(user: UserModel) {
        this.address = user.address;
        this.birth_date = user.birth_date;
        this.bool = user.bool;
        this.city_id = user.city_id;
        this.document_expiration_date = user.document_expiration_date;
        this.document_id = user.document_id;
        this.document_number = user.document_number;
        this.email = user.email;
        this.gender = user.gender;
        this.gender_id = user.gender_id;
        this.imei = user.imei;
        this.last_names = user.last_names;
        this.names = user.names;
        this.first_name = user.first_name;
        this.second_name = user.second_name;
        this.first_last_name = user.first_last_name;
        this.second_last_name = user.second_last_name;
        this.parent_info = user.parent_info;
        this.phone_number = user.phone_number;
        this.pin = user.pin;
        this.push_registration_id = user.push_registration_id;
        this.query_id = user.query_id;
        this.referrer_phonenumber = user.referrer_phonenumber;
        this.state_id = user.state_id;
        this.topic_registration_id = user.topic_registration_id;
    }


    public getFirstName() {
        return this.first_name;
    }
    public setFirstName(firs_name) {
        this.first_name = firs_name;
        this.names = this.first_name + ' ' + this.second_name;
    }
    public getSecondName() {
        return this.second_name;
    }
    public setSecondName(second_name) {
        this.second_name = second_name;
        this.names = this.first_name + ' ' + this.second_name;
    }
    public getFirstLast_Name() {
        return this.first_last_name;
    }
    public setFirstLastName(firs_Last_name) {
        this.first_last_name = firs_Last_name;
        this.last_names = this.first_last_name + ' ' + this.second_last_name;
    }
    public getSecondLastName() {
        return this.second_name;
    }
    public setSecondLastName(second_Last_name) {
        this.second_last_name = second_Last_name;
        this.last_names = this.first_last_name + ' ' + this.second_last_name;
    }



    public getDateTime_ExpedicionDate() {
        return this.document_expiration_date;
    }
    public setDateTime_ExpedicionDate(document_expiration_date) {
        this.document_expiration_date = document_expiration_date;
    }

    public getPhoneNumber () {
        return this.phone_number;
    }
    public setPhoneNumber (phone_number) {
        this.phone_number = phone_number;
    }
    public getImei () {
        return this.imei;
    }
    public setImei (imei) {
        this.imei = imei;
    }
    public  getDocument_number() {
        return this.document_number;
    }
    public setDocument_number (document_number) {
        this.document_number = document_number;
    }
    public getDocument_type() {
        return this.document_type;
    }
    public setDocument_type (document_type) {
        this.document_type = document_type;
    }

    public getDateTime_BirthDate() {
        return this.birth_date;
    }
    public setDateTime_BirthDate (dateTime_BirthDate){
        this.birth_date = dateTime_BirthDate;
    }

    public getGender_Gender() {
        return this.gender;
    }
    public setGender_Gender (gender){
        this.gender = gender;
    }
    public getbool_IsValid() {
        return this.bool;
    }
    public setbool_IsValid (bool) {
       this.bool = bool;
    }
    public getDocumentId() {
        return this.document_id;
    }
    public setDocumentId (documentId) {
       this.document_id = documentId;
    }
    public getGender_Id () {
        return this.gender_id;
    }
    public setGender_Id (gender_Id) {
       this.gender_id = gender_Id;
    }
    public getStateId() {
        return this.state_id;
    }
    public setGStateId (stateId) {
        this.state_id = stateId;
    }
    public getCityId() {
        return this.state_id;
    }
    public setCityId (cityId) {
        this.city_id = cityId;
    }
    public getAddress() {
        return this.state_id;
    }
    public setAddress (cityId) {
        this.city_id = cityId;
    }
    public getPin() {
        return this.pin;
    }
    public setPin (pin) {
        this.pin = pin;
    }
    public getEmail() {
        return this.email;
    }
    public setEmail (email) {
        this.email = email;
    }
    public getPushRegistrationId() {
        return this.push_registration_id;
    }
    public setPushRegistrationId (pushRegistrationId) {
        this.push_registration_id = pushRegistrationId;
    }
    public getTopicRegistrationId() {
        return this.topic_registration_id;
    }
    public setTopicRegistrationId (topicRegistrationId) {
        this.topic_registration_id = topicRegistrationId;
    }
    public getReferrerPhonenumber() {
        return this.topic_registration_id;
    }
    public setReferrerPhonenumber (referrerPhonenumber) {
        this.referrer_phonenumber = referrerPhonenumber;
    }
    public getMinorParentInfo_ParentInfo() {
        return this.parent_info;
    }
    public setMinorParentInfo_ParentInfo (minorParentInfo_ParentInfo) {
        this.parent_info = minorParentInfo_ParentInfo;
    }
    public getQueryId() {
        return this.query_id;
    }
    public setQueryId (query_Id) {
        this.query_id = query_Id;
    }
    public getNames() {
        return this.names;
    }
    public getLastNames() {
        return this.last_names;
    }

}
