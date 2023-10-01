class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is: ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourses(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const kunal = new teacher('kunal', 'kunal@gmail.com', '123')

const ravi = new user('ravi')

kunal.addcourses()
ravi.logme()

console.log(ravi instanceof user);