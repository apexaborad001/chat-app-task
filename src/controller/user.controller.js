const users = require('../model/user.model')

exports.create =async(req,res)=>{
  try{
    console.log("hello")
    
    const userCreate = new users({
        role:req.body.role,
        name:req.body.name,
        isOnline:req.body.isOnline
    })
    const saveUser = await userCreate.save()
    console.log(saveUser);
    res.send(saveUser) 
  }catch(e){
    console.log(e);
    return null;
  }
}