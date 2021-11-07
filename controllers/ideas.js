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
  res.render("ideas/new", {
    title: "Submit an Idea"
  })
}

export {
  index,
  newIdea as new
}