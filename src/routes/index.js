const express = require("express");
const router = express.Router();
const pokemons = require("./pokemons");

router.use("/pokemons", pokemons);

module.exports = router;
