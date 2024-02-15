function validateZip(req, res, next) {
  const zip = req.params.zip
  const zipRegex = /^\d{5}$/
  if (!zip || !zipRegex.test(zip)) {
    res.send(`Zip ${zip} is invalid!`)
  } else {
    next()
  }
}

module.exports = validateZip;
