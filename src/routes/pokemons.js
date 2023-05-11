const express = require("express");
const pokemonsController = require("../controllers/pokemons");
const validations = require("../validations/pokemonsValidations");
const router = express.Router();

router
  .get("/", pokemonsController.getAllPokemons)
  .get("/:id", pokemonsController.getPokemonById)
  .post("/", validations.validateCreation, pokemonsController.createPokemon)
  .delete("/:id", pokemonsController.deletePokemon)
  .put("/:id", pokemonsController.updatePokemon);

module.exports = router;
