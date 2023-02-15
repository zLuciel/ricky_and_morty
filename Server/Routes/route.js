const express = require("express")
const {getAllChar,getCharacterId,addFavorites,getSearch,getFilter, getFavorites,deleteFavorites} = require("../controller/api")

const router = express.Router()

router.get("/characters",getAllChar)
router.get("/details/:id",getCharacterId)
router.post("/favorites",addFavorites)
router.get("/favorites",getFavorites)
router.get("/search",getSearch)
router.get("/filter",getFilter)
router.delete("/favorites/:id",deleteFavorites)

module.exports = router