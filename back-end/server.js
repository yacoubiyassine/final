const express=require('express')
const connectDB = require('./config/connectDB')
const userRoute = require('./routes/userRoute')
const fishRoute = require('./routes/fishRoutes')
const commandeRoutes = require('./routes/commandeRoutes')


const app=express()
const port=5000
app.use(express.json())
connectDB()
app.use("/api/user",userRoute)
app.use("/api/fish",fishRoute)
app.use('/api/commande',commandeRoutes)

app.listen(port,console.log("server is runnig port: "+port))
