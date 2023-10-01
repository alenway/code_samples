function Setusername(username) {
  //complex db calls
  this.username = username;
}

function createUser(username, email, password) {
  Setusername.call(this,username);
  this.email = email;
  this.password = password;
}

const hell = new createUser("hell", "world@gamil.com", "123");

console.log(hell);
