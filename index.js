// reading file
const dbConnect = require("./mongodb");

//method 1 promise
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// method 2:async await
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
