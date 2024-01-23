const user = {
  userName: "Muizz",
  price: 999,

  welcomeMessege: function () {
    console.log(`${this.userName}, Welcome to website`);
    //  console.log(this);
  },
};

// user.welcomeMessege();//Muizz, we....
// user.userName="Sam";
// user.welcomeMessege();//Sam, welcome.....

//console.log(this);//{} ,result is an empty object

/*
Three types of function.1)function declaration,2)function expression
3)arrow function.


*/

one();
function one() {
  let userName = "Muizz";
  // console.log(this.userName);//undefined
  // console.log(this);//gives Object[global]
}

const two = function () {
  let userName = "Muizz";
  // console.log(this.userName);//undefined
  // console.log(this);//give Object[global]
};
two();
const three = () => {
  let userName = "Muizz";
  // console.log(this.userName);//undefined
  // console.log(this);//gives {} empty object
};
three();
// **************** Ways to write arrow function **************
//NO:1
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 5));

//NO:2 implicit return
//const addThree = (n1,n2,n3) =>  n1+n2+n3;
//console.log(addThree(1,2,3));
//NO:3
const addThree = (n1, n2, n3) => n1 + n2 + n3;
console.log(addThree(1, 2, 3));

// ** Return an object

const returnObj = () => ({ username: "Muizz" });
console.log(returnObj());
