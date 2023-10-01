class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username: ${this.username}`)
    }
    static createid(){
        return `123`
    }
}

const nitin = new user("nitin")
// console.log(nitin.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('iphone', 'iphone@gmail.com')
console.log(iphone.logme())
console.log(iphone.createid())