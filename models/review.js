import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
    review: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

export {
  Review
}