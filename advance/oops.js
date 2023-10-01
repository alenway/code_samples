//object literal like this is the basic object
//object literal = basic object which include key and value , properties
// const user = {
//   username: "nitin",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log("user details");
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());

//constructor funciton
// const promise = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
  }

  //return this; its already pre defined in this scrore if we write or not
  return this;
}

const userOne = new user("nitin", 12, true);
const userTwo = new user("ravi", 23, true);

console.log(userOne.constructor);
// console.log(userTwo);
