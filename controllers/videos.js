function index(req, res) {
  console.log("herehfe", req.params.id)
  res.render("videos/index", {
    title: "Focus Group",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/ideas")
  })
}

export {
  index
}