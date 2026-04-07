const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    titel:String,
    dis:String
})

const noteModel = mongoose.model("Notess",noteSchema)

module.exports = noteModel
