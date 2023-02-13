const express = require("express")
const {getAllChar,getCharacterId,addFavorites,getSearch,getFilter} = require("../controller/api")

const router = express.Router()

router.get("/characters",getAllChar)
router.get("/details/:id",getCharacterId)
router.post("/favorites",addFavorites)
router.get("/search",getSearch)
router.get("/filter",getFilter)

module.exports = router