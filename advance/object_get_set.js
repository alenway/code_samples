const user = {
    _email: 'nitin@gmail.com',
    _password: 'addd',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const nitin = Object.create(user)
console.log(nitin.email)