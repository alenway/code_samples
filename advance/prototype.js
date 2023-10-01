let myname = "nitin.              ";
console.log(myname.truelength);

let myhero = ["huld", "spiderman", "ironman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getspiderpower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.nitin = function () {
  console.log(`nitin is present in all objects`);
};

Array.prototype.heynitin = function () {
  console.log(`nitin says hello`);
};

// heropower.nitin();
myhero.nitin();
myhero.heynitin();
// heropower.heynitin()

//inheritance

const user = {
  name: "ravi",
  email: "mail@gmail.com",
};

const teacher = {
  makevideo: true,
};

const teachingsupport = {
  isvalid: false,
};

const tasupport = {
  makeassistant: "js assigment",
  fulltime: true,
  __proto__: teachingsupport,
};

teacher.__proto__ = user;

//modern syntex

Object.setPrototypeOf(teachingsupport, teacher);

let anotherusername = "carival sons       ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`true length is: ${this.trim().length}`);
};

anotherusername.truelength();
