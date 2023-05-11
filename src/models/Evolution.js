const evolutionSchema = new Schema(
  {
    previous: {
      type: Schema.Types.ObjectId,
      ref: "Pokemon",
    },
    next: {
      type: Schema.Types.ObjectId,
      ref: "Pokemon",
    },
    levelToEvolve: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Evolution", evolutionSchema);
