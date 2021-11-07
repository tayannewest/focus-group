import mongoose from "mongoose"


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  ideas: {
    type: Number,
    min: 0,
  },
  reviews: {
    type: Number,
    min: 0,
  },
}, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)

export {
  Profile
}