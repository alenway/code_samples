// const promiseone = new Promise(function (resolve, reject) {
//   //do an async task
//   //db calls, cryptography, network call
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// //then is directly connected to resolve
// promiseone.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "nitin", email: "example@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//     console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "nitin", password: "1234" });
//     } else {
//       reject("Error Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise is eather resolve or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "1234" });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getAllUsers();

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) =>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// Define a function that takes a callback as an argument
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task is done!");
    callback(); // Call the callback function
  }, 1000);
}

// Define a callback function
function afterTaskIsDone() {
  console.log("Callback function executed.");
}

// Call the function with the callback
doSomethingAsync(afterTaskIsDone);
