//use promharshit.html

//                            ****** async await

//

const url = "https://jsonplaceholder.typicode.com/posts";

// when i write async then that function not a normal function.then it returns promise.
async function getPost() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something wrong");
  }
  const data = await response.json();
  //console.log(response);
  return data;
}

//console.log(getPost());

getPost()
  .then((myData) => console.log(myData))
  .catch((err) => {
    console(err);
  });
/*
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
*/
