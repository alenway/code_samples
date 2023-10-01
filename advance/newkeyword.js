// function multiply(num) {
//     return num * 5;
//   }
  
//   multiply.power = 2;
  
//   console.log(multiply(5)); // 25
//   console.log(multiply.power); // 2
  
//   function createUser(username, score) {
//     this.username = username;
//     this.score = score;
//   }
  
//   createUser.prototype.increment = function () {
//     this.score++;
//   };
  
//   createUser.prototype.printMe = function () {
//     console.log(`score is ${this.score}`);
//   };
  
//   const chai = new createUser('chai', 25);
//   const tea = new createUser('tea', 50);
//   chai.increment();
//   chai.printMe();
  