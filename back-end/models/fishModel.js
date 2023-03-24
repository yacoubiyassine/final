const mongoose=require('mongoose')
const fishSchema=new mongoose.Schema({
      type:String,
      imageUrl:String,
      prix:Number,
      panier:Boolean

})
module.exports=mongoose.model('fishe',fishSchema)

