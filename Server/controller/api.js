const axios = require("axios");
let favorite = []
const ApiRick = {
  getAllChar: async function (req, res) {
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      res.status(200).json(response.data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  getCharacterId: async function (req, res) {
    let { id } = req.params;
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/${Number(id)}`
      );
      res.status(200).json(response.data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  addFavorites: async function (req, res) {
    const { id } = req.body; // aqui veo lo que me manda el cliente atraves de post
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/${Number(id)}`
      );
      //**valida si ya existe */
      let validate = favorite.some(el=> el.id === response.data.id)
      if(!validate) favorite.push(response.data);
       res.status(200).json(favorite);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  //** get de favorites */
  getFavorites: function (req,res){
   try {
    res.status(200).json(favorite);
   } catch (error) {
    res.status(404).json({ error: err.message });
   }
  },
  deleteFavorites: function (req,res){
    let { id } = req.params;
    console.log(id);
    try {
    favorite = favorite.filter(fav => fav.id !== Number(id));
     res.status(200).json(favorite);
    } catch (error) {
     res.status(404).json({ error: err.message });
    }
   },
  getFilter: async function (req, res) {
    //ejemplo http://localhost:3001/filter?page=2&query=gender&type=female
    const { page, query, type } = req.query;
    const API_URL = "https://rickandmortyapi.com/api/character/";
    let characters;
    try {
      const response = await axios.get(
        `${API_URL}?page=${page}&${query}=${type}`
      );
      characters = response.data;
      res.status(200).json(characters);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  getSearch: async function (req, res) {
    const { name } = req.query;
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      res.status(200).json(response.data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
};

module.exports = ApiRick;
