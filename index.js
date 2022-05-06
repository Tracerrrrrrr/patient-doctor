const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=3000;
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
}))
const Db='mongodb+srv://Shivam:0XybYaY4YsmjvMaL@cluster0.oysfx.mongodb.net/test';
mongoose.connect(Db).then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log(err)
})
const appoint=require('./routes/Appointment')
app.use('/appoint',appoint)
app.listen(port,()=>{
    console.log(`app running on ${port}`)
})