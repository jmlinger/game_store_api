const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  // {
  //   versionKey: false, // Mostra o número de alterações no registro. Vide resp 94: https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose.
  // },
);

module.exports = mongoose.model('games', gameSchema);
