function getMainPage(req,res) {
  res.render('index', {
    user: req.user
  })
}









module.exports = {
  getMainPage
}