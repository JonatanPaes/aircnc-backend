const User = require("../models/User");

// metodos dos controllers, Index show, store, update, destroy
// index listagem de sessoes
// show lista uma unica sessao
// store criar uma sessão
// update alterar uma sessão
// destroy deleter uma sessão
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
