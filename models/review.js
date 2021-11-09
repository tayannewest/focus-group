import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
    content: String,
    goodIdea: Boolean,
    contributor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Profile"},
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

export {
  Review
}