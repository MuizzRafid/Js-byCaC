"use strict";

//promise.all();
//it takes an array or other iterable of promises.It help to make parallal api call and give the
//output.
//supose promise.all([p1,p2,p3]) takes an array of 3promises  where p1 takes 3s,p2 takes 1s and
//p3 takes 2s.if p2 get rejected then promise.all() throws an error at 1s but if p1 will fail
//it will give the error at 3s cause all they run parallaly.and the output time of promise.all() is
//the promise which take the hightest time.Its like all or none.if all sucessful
//then its give collective result but any of then become fail it throw error
//promise.allSettled([p1,p2,p3])=time(3s,1s,2s)
//if all the promise get sucessfull at 3s proimse.allSettled give a collective output of an array
//like promise.all(). but in this case p2 gets rejected then it will waits for all promise to
//settled doesn't matter if they get sucess or failure.The output of allsettled is an array of
//how many promise i passed on.if its sucessful i get an array of that .if failed the get the result
//of that each promises output. it gives an Object
//promise.race([p1,p2,p3])=time(3s,1s,2s)
//like name which promise finised first will be the winner.if p1,p2,p3 all sucessful p2 takes 1s
//so p2 is the winner.and it will give the value of first settled promise.if p2 gets rejected then
//then it will throw error and return result of first set tled promise ,will not wait for others.
//promise.any([p1,p2,p3])=time(3s,1s,2s)
//its same like promise.race but it will wait for first promise to get sucessful.its kind of a race
//but give result when become sucessfull.if p2 is rejected after 1s promise.any is just ignore it,
//afer 2s if p3 become sucessful then it give the result and if p3 fails its again ignore and wait for
//p1.Buuutttt all off them gets rejected then its gave an error of AggregateError or list of all error
var p1 = new Promise(function (rs, rj) {
  setTimeout(function () {
    //rs("P1,sucess");
    rj("P1 fail using promise");
  }, 1000);
});
var p2 = new Promise(function (rs, rj) {
  setTimeout(function () {
    rs("P2 sucess");
  }, 4000);
});
var p3 = new Promise(function (rs, rj) {
  setTimeout(function () {
    rs("P3 sucess");
  }, 2000);
}); //                     Promise all

Promise.all([p1, p2, p3]).then(function (res) {
  console.log(res);
})["catch"](function (err) {
  return console.error(err, " all");
}); //                        Promise allSettled

Promise.allSettled([p1, p2, p3]).then(function (res) {
  res.forEach(function (e) {
    console.log(e.value || e.reason, " settled");
  });
  return res;
})["catch"](function (e) {
  return console.log(e);
}); //                        Promise  race

Promise.race([p1, p2, p3]).then(function (res) {
  console.log(res, " race");
})["catch"](function (e) {
  return console.log(e, " by race");
}); //                      promise any

Promise.any([p1, p2, p3]).then(function (res) {
  console.log(res, " any");
})["catch"](function (e) {
  return console.log(e);
});