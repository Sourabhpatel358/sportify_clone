const jwt=require("jsonwebtoken");

async function authArtist(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }

    try{
        const decorded=jwt.verify(token,process.env.JWT_SECRET)
        if(decorded.role!=="artist"){
            return res.status(403).json({message:"you dont have permission to create music "})
            next()
        }
    }catch{
        console.log(err);
        return res.status(401).json({message:"unauthorized"})
    }
}
async function authUser(req,res,next){
    const token =req.cookies.token;
    if(!token){
        res.status(401).json({message:"unauthorized"})
    }
    try{
        const decorded=jwt.verify(token,process.env.JWT_SECRET)
        if(decorded.role!=='user'){
            return res.status(403).json({message:"you dont have access"})
        }
        req.user=decorded;
        next()
    }catch(err){
        console.log(err);
        return res.status(401).json({message:"unauthorized"})
    }
}
module.exports={authArtist,authUser}