const mongoose = require('mongoose');



const connectionDb = async()=>{
    try {
            await mongoose.connect(process.env.MONGO_DB)
    } catch (error) {
        console.log(error)
    }
}
module.exports =  connectionDb;