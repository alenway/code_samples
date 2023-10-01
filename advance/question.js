// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// // console.log(Math.PI)

// console.log(descripter);

const mynewobject = {
  name: "pllo",
  price: 400,
  isavailable: true,

  order: function(){
    console.log("working model")
  }
};
console.log(Object.getOwnPropertyDescriptor(mynewobject, "name"));

Object.defineProperty(mynewobject, "name", {
  // writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(mynewobject, "name"));

for (const [key, value] of Object.entries(mynewobject)) {
  if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
  }
}
