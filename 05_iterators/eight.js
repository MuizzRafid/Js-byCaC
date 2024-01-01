// ********* reduce method

const arr=[1,2,3,4];

const initialValue=0;

const sumWithInitial=arr.reduce(
    (accumulator,currentValue)=>{return accumulator+currentValue},
    initialValue
);
//console.log(sumWithInitial);

 // ******* Using Reduce on Objects
const shopingCart=[
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"Mobile dev course",
        price:5999
    },
    {
        itemName:"Data scinence course",
        price:12999
    }
];

const total=shopingCart.reduce((acc,item)=> item.price+acc,0)
console.log(total);