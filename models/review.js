import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
  contributor: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Profile"},
    content: String,
    goodIdea: Boolean,
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

export {
  Review
}