
//way to declare date

let myDate=new Date();
console.log(myDate);//2023-12-30T18:24:35:813Z

// console.log(myDate.toString());//Sat Dec 30 2023 18:24:35 GMT+0000
// console.log(myDate.toDateString());//Sat Dec 30 2023
// console.log(myDate.toISOString());//2023-12-30T18:24:35.813Z
// console.log(myDate.toLocaleString()); //12/30/2023, 6:28:18PM
// console.log(myDate.toJSON()); //2023-12-30T18:24:35.813Z

let anoDate=new Date("2023-12-30");
console.log(typeof anoDate);//object
let ano1Date=new Date(2023,0,30);
console.log(ano1Date.toDateString());

let dateExp=myDate.toISOString();//isoString converts date into string
console.log(typeof dateExp);//string

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(anoDate.getTime());
console.log(ano1Date.getDay()); //return the day of the week 0 to 6(sunday=0)
console.log(`the day is ${anoDate.getDay()} and the month is ${anoDate.getMonth()+1}`);