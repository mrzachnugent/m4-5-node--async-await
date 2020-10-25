// Exercise 3
// ----------

const doublesLater = async (num) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 2000);
    console.log("DOUBLED!");
  });
  let result = await promise;
  return result;

  // return new Promise((resolve, reject) => {
  //   setTimeout(resolve, 2000);
  // }).then(() => {
  //   console.log("done");
  //   return num * 2;
  // });

  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const double = await doublesLater(num);
  const quad = await doublesLater(double);
  return doublesLater(quad);
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
