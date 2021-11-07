import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
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