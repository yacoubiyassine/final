const express=require('express')
const { getFish, postFish, updateFish, deleteFish } = require('../controlles/fishControlles')
const fishRoute=express.Router()

fishRoute.get('/fish',getFish)
fishRoute.post('/post',postFish)
fishRoute.put('/update/:id',updateFish)
fishRoute.delete('/del/:id',deleteFish)

module.exports=fishRoute