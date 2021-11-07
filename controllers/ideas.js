import { Idea } from "../models/idea.js"



function index(req, res) {
  Idea.find({})
  .then(ideas => {
    res.render("ideas/index", {
      title: "Car Ideas",
      ideas,
    })
  })
}

function newIdea(req, res) {
  console.log(Idea)
}

export {
  index,
  newIdea as new
}