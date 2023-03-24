const fishModel = require('../models/fishModel')

exports.getFish=async(req,res)=>{
    try {
        const fish= await fishModel.find()
        return  res.status(200).send({msg:"we have it",fish})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.postFish= async(req,res)=>{
    try {
        const fish=new fish(req.body)
        await fish.save()
      return  res.status(200).send({msg:"product added",fish})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateFish=async(req,res)=>{
    try {
        const fish= await fish.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return  res.status(200).send({msg:"fish was updated",fish})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteFish=async(req,res)=>{
    try {
        await fish.findByIdAndDelete(req.params.id)
        return  res.status(200).send({msg:"product was deleted"})
    } catch (error) {
        return res.status(500).send(error)
    }
}

