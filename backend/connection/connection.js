const mongoose=require("mongoose");
const connection=async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://subisha:Subhiksha06@cluster0.rwvahrb.mongodb.net/")
    .then(()=>{
        console.log("connected");
    });
    } catch (error) {
       res.status(400).json({
        message:"Not Connected"
       } );
    }
};
connection();