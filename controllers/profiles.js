import { Idea } from '../models/idea.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "All Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      Idea.find({contributor: req.user.profile._id})
      .then(isContributor => {
      res.render("profiles/show", {
        title: `${profile.name}'s Profile`,
        profile,
        self,
        isSelf,
        isContributor
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
})
}



export {
  index,
  show
}