const express=require('express')
const {Register,Login,deleteuser,updateuser, getuser}=require('../controlles/usercontrol')
const { isAuth } = require('../middlewear/isAuth')
const { registerValidator, validation, loginValidator } = require('../middlewear/validation')

const userRoute=express.Router()
userRoute.get('/getuser',getuser)
userRoute.post('/',registerValidator,validation,Register)
userRoute.post('/login',loginValidator,validation,Login)
userRoute.get('/current',isAuth,(req,res)=>res.send({ user: req.user }))
userRoute.delete('/del/:id',deleteuser)
userRoute.put('/edit/:id',updateuser)
module.exports=userRoute