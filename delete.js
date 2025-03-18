const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({ name: "Iphone 16" });
  if (result.acknowledged) {
    console.log("data deleted");
  }
};
deleteData();
