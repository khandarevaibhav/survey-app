const mongoose = require('mongoose');
const userModel=require('../models/user');
const jwt=require('jsonwebtoken')
const SECRET_KEY="NOTESAPI"
const bcrypt=require('bcrypt');

const signup=async(req,res)=>{
    //is he a existing user
    //hash the password
    //user creation
    //token generation


    //const {username,email,password}=req.body;
     const username = req.body.username;
     const email = req.body.email;
     const password = req.body.password;
    try{
        const existingUser=await userModel.findOne({email:email})
        
        if(existingUser){
            return res.status(400).json({message:'User already exists'});
        }

        const hashedPassword=await bcrypt.hash(password,10)
       
        const result =await userModel.create({
            email:email,
            password:hashedPassword,
            username:username
        })

        // const token=jwt.sign({
        //     email:result.email,
        //     id:result._id
        // },SECRET_KEY)


       return res.status(201).json({message:"registered", user:result});




    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'something went wrong long ago...'})

    }

}

const signin=async(req,res)=>{
    const {email,password}=req.body;
	try{
		const existingUser=await userModel.findOne({email:email});
		if(!existingUser){
			return res.status(404).json({message:'User Not Found !'})	
	

		}
		const matchPassword=await bcrypt.compare(password,existingUser.password);
		if(!matchPassword){
			return res.status(400).json({message:'Invalid Credentials'});
		
		}

		const token =jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY,{expiresIn:'3600s'});
		res.status(201).json({user:existingUser,token:token});

	}
	catch(error){
	console.log(error);
		res.status(500).json({message:"Something went wrong"});
	
	}
}




module.exports={signup,signin}