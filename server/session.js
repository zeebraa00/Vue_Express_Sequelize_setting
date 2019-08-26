module.exports = (req, res, next) => {
  console.log(req.session)
  if (req.session.user) {
    next();
  } else {
    res.status(500).json({
      message: "no session"
    })
  }
}