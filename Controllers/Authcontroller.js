import UserModals from "../Modals/User.Modals.js"
import bcrypt from 'bcrypt';

export const Login=(req,res)=>{
res.send("login here")
}
export const Register= async(req,res)=>{
    console.log("hello")
    try{
       
      const {name,email,password}=req.body.data
    //   console.log(email,password,"email password")
    if(!email || !password) return res.status(401).json({success:false,message:"all field are mandatory"})
    const hashedPassword = await bcrypt.hash(password , 10); 


    const user= new UserModals({
        email,password:hashedPassword,name
    })
    
    await user.save()

    return res.status(200).json({success:true,message:"Registration successfull"})
    
    }catch(error){
     res.status(500).json({success:false ,message:error})
    }
    }
    