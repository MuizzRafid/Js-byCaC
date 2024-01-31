const myHero = ["SuperMan", "BatMan", "SpiderMan"];

let count = 0;
while (count < myHero.length) {
  console.log(myHero[count]);
  count++;
}

do {
  console.log(myHero[count]);
  count--;
} while (count >= 0);

//**Try to find why i get undefined at the starting of printing
//do while loop
