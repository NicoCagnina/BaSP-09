const Pokemon = require("../models/Pokemon");

const getAllPokemons = (req, res) => {
  Pokemon.find()
    .then((pokemons) => {
      return res.status(200).json({
        message: "Complete pokemons list",
        data: pokemons,
        error: false,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "An error ocurred",
        error,
      });
    });
};

const getPokemonById = (req, res) => {
  const { id } = req.params;

  Pokemon.findById(id, "name types")
    .then((pokemon) => {
      return res.status(200).json({
        message: `Pokemon found! It was ${pokemon.name}`,
        data: pokemon,
        error: false,
      });
    })
    .catch((error) => {
      return res.json({
        message: "An error ocurred",
        error,
      });
    });
};

const createPokemon = (req, res) => {
  const { name, pokedexNumber, legendary, stats, types } = req.body;

  Pokemon.create({
    name,
    pokedexNumber,
    legendary,
    stats,
    types,
  })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        message: "An error ocurred!",
        error,
      });
    });
};

const updatePokemon = (req, res) => {
  const { id } = req.params;
  const { name, pokedexNumber, legendary, stats, types } = req.body;

  Pokemon.findByIdAndUpdate(
    id,
    {
      name,
      pokedexNumber,
      legendary,
      stats,
      types,
    },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `Pokemon with id: ${id} was not found`,
          error: true,
        });
      }
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

const deletePokemon = (req, res) => {
  const { id } = req.params;

  Pokemon.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          msg: `Pokemon with id: ${id} was not found`,
        });
      }
      return res.status(204);
    })
    .catch((error) => {
      return res.status(400).json({
        message: "An error ocurred!",
        error,
      });
    });
};

module.exports = {
  getAllPokemons,
  createPokemon,
  getPokemonById,
  deletePokemon,
  updatePokemon,
};
