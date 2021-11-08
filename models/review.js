import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
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