class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
        this._email = value
    }
    
    get password(){
        return `${this._password}nitin`
    }

    set password(value){
        this._password = value
    }
}

const nitin = new user('nitin@gamil.com','123yu')
console.log(nitin.password)