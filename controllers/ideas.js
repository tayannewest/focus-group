import { Idea } from "../models/idea.js"
import { Review } from "../models/review.js"


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
  .populate({
    path: "reviews",
    populate: {
      path: "contributor"
    }
  })
  .then(idea => {
    console.log(idea)
    res.render("ideas/show", {
      title: "Car Idea",
      idea,
    })
    console.log(idea.contributor.name)
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

function update(req, res) { 
  Idea.findById(req.params.id)
  .then(idea => {
    if(idea.contributor.equals(req.user.profile._id)) {
      idea.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/ideas/${idea._id}`)
      })
    } else {
      throw new Error ("Uh oh, you're not allowed to make that change here")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
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

async function createReview(req, res) {
  try {
    req.body.contributor = req.user.profile._id
    req.body.goodIdea = !!req.body.goodIdea
    const review = await Review.create(req.body)
    const idea = await Idea.findById(req.params.id)
    idea.reviews.push(review._id)
    idea.save(() => {
      res.redirect(`/ideas/${idea._id}`)
    })
  }  catch (error) {
    console.log(error)
  }
}

function deleteReview(req, res) {
  const idea = Idea.findById(req.params.ideaId)
  .then(idea => {
    const ideaReviews = idea.reviews
    ideaReviews.remove({_id: req.params.reviewId})
    idea.save()
    .then(idea => {
      res.redirect(`/ideas/${req.params.ideaId}`)
    })
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
  createReview,
  deleteReview,
}