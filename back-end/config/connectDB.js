const mongoose=require('mongoose')
const connectDB=()=>{
    try {
        mongoose.connect("mongodb+srv://yacoubiyass:yassine1966@cluster0.oylfmpw.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connect")
    }
}
module.exports=connectDB