const express = require("express");

const router = express.Router()


router.get("/", (req, res)=>{
    res.json({message: "get goals"})
})
router.post("/", (req, res)=>{
    res.json({message: "set goals"})
})
router.put("/:id", (req, res)=>{
    res.json({message: `Update goals ${req.params.id}`})
})
router.delete("/:id", (req, res)=>{
    res.json({message: `delete goals ${req.params.id}`})
})

module.exports = router