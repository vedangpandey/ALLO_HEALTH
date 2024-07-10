import express from 'express';

const router =express.Router();

router.post("/signup",(req,res)=>{
    res.send("SignUp")
})
router.post("/login",(req,res)=>{
    console.log("inside router");
    res.send("login")

})
router.post("/logout",(req,res)=>{
    res.send("logout")
})

export default router;