// ***** for each loop

const conding =["js","ruby","java","python"];

conding.forEach( function(item){
//console.log(item);
});

conding.forEach((item)=>{
//console.log(item);
})
//foreach have not only items but it can access index
// and the total array
conding.forEach((item,index,arr)=>{
  //  console.log(item, index, arr);
})


const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
//console.log(item.languageName);
for (const key in item) {
   console.log(`"${key}" and the value:-"${item[key]}"`);
}
})