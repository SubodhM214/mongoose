const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();

  const result = await db.insertOne({
    name: "Iphone 16",
    Brand: "Apple",
    price: 420,
    category: "mobile",
  });
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
