const mongoose  = require("mongoose");

module.exports.dbConnection = ()=>
{
    mongoose.connect("mongodb+srv://mohamedtolba:12345tolba@cluster0.mljgkle.mongodb.net/noteappdb").then(()=>
    {
        console.log("db connected")
    }).catch((error)=>
    {
console.log(error)
    })
}