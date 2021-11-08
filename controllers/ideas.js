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

function addIdea(req, res) {
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
  Idea.findById(req.params.id)
  .then(idea => {
    res.render("ideas/edit", {
      idea,
      title: "Edit your Idea"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

// function update(req, res) { 
//   console.log("party")
//   console.log(req.params.id)
//   Idea.findById(req.params.id)
//   .then(idea => {
//     if(idea.contributor.equals(req.user.profile._id)) {
//       console.log(req.body.name)
//       req.body = !!req.body
//       idea.updateOne(req.body, {new: true})
//       console.log(req.body, "updated body")
//       .then(() => {
//         res.redirect(`/ideas/${idea._id}`)
//       })
//     } else {
//       throw new Error ("Uh oh, you're not allowed to make that change here")
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/ideas")
//   })
// }

function update(req, res) {
  console.log(req.body, req.params.id)
  req.body = !!req.body
  Idea.findByIdAndUpdate(req.params.id, req.body, function(err, idea) {
    res.redirect(`/ideas/${idea._id}`)
  })
}

function deleteIdea(req, res) {
  Idea.findByIdAndDelete(req.params.id)
  .then(idea => {
    if(idea.contributor.equals(req.user.profile._id)) {
      idea.delete()
      .then(() => {
        res.redirect("/ideas")
      })
    } else {
      throw new Error ("Uh oh, you're not allowed to do that here")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}



export {
  index,
  newIdea as new,
  addIdea,
  show,
  edit,
  update,
  deleteIdea as delete,
}