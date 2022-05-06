const express=require("express")
const router=express.Router()
const Patient=require('../models/PatientSchema')
router.get('/',(req,res)=>{
    return res.json({
        message:"Hello from appointment side"
    })
})

router.post('/post',async(req,res)=>{
   const{doctorId,ClinicId,Title,firstname,lastname,address,city,state,Pincode,Country,patient_bp,patient_temp,patient_plus,patient_weight,ShortNote,prescriptionNote}=req.body;
   
   if(!doctorId)
   {
       return res.json({
           message:"Please Select A Doctor"
       })
   }
   if(!ClinicId)
   {
       return res.json({
           message:"Please Select A Clinic"
       })
   }
   if(!Title)
   {
       return res.json({
           message:"Please Enter A Title"
       })
   }
   if(!firstname)
   {
       return res.json({
           message:"lease Enter firstName"
       })
   }
   if(!lastname)
   {
    return res.json({
        message:"Please Enter lastName"
    })
}
   if(!address)
   {
    return res.json({
        message:"Please Enter address"
    })
}
   if(!city)
   {
    return res.json({
        message:"Please Enter city"
    })
}
   if(!state)
   {
    return res.json({
        message:"Please Enter state"
    })
}
   if(!Pincode)
   {
    return res.json({
        message:"Please Enter Pincode"
    })
}
   if(!Country)
   {
    return res.json({
        message:"Please Enter Country"
    })
}
if(!patient_bp)
{
 return res.json({
     message:"Please Enter patient_bp"
 })
}

if(!patient_temp)
{
 return res.json({
     message:"Please Enter patient_temp"
 })
}

if(!patient_plus)
{
 return res.json({
     message:"Please Enter patient_plus"
 })
}

if(!patient_weight)
{
 return res.json({
     message:"Please Enter patient_weight"
 })
}

if(!ShortNote)
{
 return res.json({
     message:"Please Enter ShortNote"
 })
}

if(!prescriptionNote)
{
 return res.json({
     message:"Please Enter prescriptionNote"
 })
}


   const patient=new Patient({
    doctorId:req.body.doctorId,
    ClinicId:req.body.ClinicId,
    Title:req.body.Title,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    address:req.body.address,
    city:req.body.city,
    state:req.body.state,
    Pincode:req.body.Pincode,
    Country:req.body.Country,
    patient_bp:req.body.patient_bp,
    patient_temp:req.body.patient_temp,
    patient_weight:req.body.patient_weight,
    patient_plus:req.body.patient_plus,
    ShortNote:req.body.ShortNote,
    prescriptionNote:req.body.prescriptionNote
   })
const UserSave=patient.save()
if(UserSave)
{
    return res.json({
        message:{
           message: "Appointment Booked Successfully"
        }
    })
}
else{
    return res.json({
        err:err
    })
}
})
router.get('/getappoint',async(req,res)=>{
    const Getdata= await Patient.find()
    if(Getdata)
    {
        return res.json({
            message:Getdata
        })
    }
})
module.exports=router;