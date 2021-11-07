import { Idea } from "../models/idea.js"



function index(req, res) {
  Idea.find({})
  .then(ideas => {
    res.render("ideas/index", {
      title: "Car Ideas",
      ideas,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function newIdea(req, res) {
  res.render("ideas/new", {
    title: "Submit an Idea"
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function create(req, res) {
  console.log("adddddddddd feature")
}

export {
  index,
  newIdea as new,
  create
}