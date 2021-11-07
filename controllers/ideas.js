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
    title: "Submit an Idea",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function addFeature(req, res) {
  req.body.contributor = req.user.profile._id
  req.body.goodIdea = !!req.body.goodIdea
  Idea.create(req.body)
  .then(idea => {
    res.redirect("/ideas")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function show (req, res) {
  Idea.findById(req.params.id)
  .populate("contributor")
  .then(idea => {
    res.render("ideas/show", {
      title: "Car Idea",
      idea
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function edit(req, res) {
  console.log('editttttttt')
}


export {
  index,
  newIdea as new,
  addFeature,
  show,
  edit
}