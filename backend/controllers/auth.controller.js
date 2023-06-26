const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    });
};

module.exports.signUp = async (req, res) => {
    const {name, email, password} = req.body
  
    try {
      const user = await UserModel.create({name, email, password });
      res.status(201).json({ user: user._id});
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(200).send({ errors });
    }
  }

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ err: 'Merci de remplir tous les champs.' });
    }

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jeton', token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = signInErrors(err);
        console.log(errors);
        res.status(400).json({ err });
    }
};

module.exports.logout = (req, res) => {
    res.cookie('jeton', '', { maxAge: 1 });
    res.redirect('/');
};