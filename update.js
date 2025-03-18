const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Iphone 16" },
    { $set: { price: 440 } }
  );
  console.log(result);
};

updateData();
