const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecomm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  Brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "Moto E",
    price: 230,
    Brand: "Motorolla",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "Moto E" },
    {
      $set: { price: 550 },
    }
  );
  console.log(data);
};

// updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "SMUI 10" });
  console.log(data);
};
// deleteInDB();
const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find({ name: "XYZ" });
  console.log(data);
};

// findInDB();
