const commandeModel = require("../models/commandeModel")

exports.getcommande=async(req,res)=>{
    try {
        const commande= await commandeModel.find().populate("userId")
        return  res.status(200).send({msg:"we have it",commande})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.postcommande= async(req,res)=>{
    try {
        const commande=new commandeModel({...req.body,userId:req.user.id})
        await commande.save()
      return  res.status(200).send({msg:"commande added",commande})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updatecommande=async(req,res)=>{
    try {
        const commande= await commandeModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return  res.status(200).send({msg:"product was updated",commande})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deletecommande=async(req,res)=>{
    try {
        await commandeModel.findByIdAndDelete(req.params.id)
        return  res.status(200).send({msg:"commande was deleted"})
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.mypcommandes=async(req,res)=>{
    try {
        const commande=await commandeModel.find({userId:req.user.id})
        return  res.status(200).send({msg:"your commande ",commande})
    } catch (error) {
        return res.status(500).send(error)
    }
}