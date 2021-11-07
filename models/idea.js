import mongoose from "mongoose"


const ideaSchema = new mongoose.Schema({
  content: String,
  goodIdea: Boolean,
  contributor: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Idea = mongoose.model("Idea", ideaSchema)

export {
  Idea
}