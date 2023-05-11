const mongoose = require("mongoose");
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name: {
    type: String,
  },
  pokedexNumber: Number,
  legendary: Boolean,
  types: [String],
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);

const expandedPokemonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pokedexNumber: {
      type: Number,
      required: true,
    },
    legendary: {
      type: Boolean,
      default: false,
    },
    types: {
      type: [String],
      required: true,
    },
    stats: {
      hp: Number,
      attack: Number,
      defense: Number,
      speed: Number,
    },
    region: {
      type: String,
      required: true,
      enum: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
    },
    evolutions: [{ type: Schema.Types.ObjectId, ref: "Evolution" }],
  },
  {
    timestamps: true,
  }
);
