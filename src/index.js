const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const DB_URL =
  "mongodb+srv://nicolascagnina:strongpassword@week-09.nycolwt.mongodb.net/";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Pokemons db connected"))
  .catch((error) => console.log("Error : ", error));

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
