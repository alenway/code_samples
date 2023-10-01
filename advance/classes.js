//es6

// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const hell = new user('nitin','name@gmail.com', '1234')

// console.log(hell.encryptpassword());
// console.log(hell.changeusername());

//behind the sceen

function users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

users.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

users.prototype.changeusername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new users("tea", "tea@gmail.com", "8484");

console.log(tea.encryptpassword());
console.log(tea.changeusername());
