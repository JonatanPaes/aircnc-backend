const mongoose = require("mongoose");

//é o schema do usuario a estrutura quais campos esse usuario vai ter
const UserSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("User", UserSchema);
