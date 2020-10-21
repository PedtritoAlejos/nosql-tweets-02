const express = require("express");
const router = express.Router();

const {
    getRelation,
    createRelationId,
    deleteRelationId,
    userById
} = require("../controllers/relation");


//routes
router.get("/relation",getRelation);
router.post("/relation/create/:userRelationId",createRelationId);
router.delete("/relation/:userRelationId",deleteRelationId);

//params
router.param("userRelationId",userById);


module.exports = router;