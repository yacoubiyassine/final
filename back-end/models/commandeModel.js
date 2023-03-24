const mongoose=require('mongoose')
const commandeSchema=new mongoose.Schema({
   userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
   fishtype:Array,
   totalprice:Number,
   totalquantite:Number
})
module.exports=mongoose.model('commande',commandeSchema)