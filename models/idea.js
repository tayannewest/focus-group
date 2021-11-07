import mongoose from "mongoose"


const ideaSchema = new mongoose.Schema({
  content: String,
  contributor: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Profile"},
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
}, 
{
  timestamps: true
})

const Idea = mongoose.model("Idea", ideaSchema)

export {
  Idea
}