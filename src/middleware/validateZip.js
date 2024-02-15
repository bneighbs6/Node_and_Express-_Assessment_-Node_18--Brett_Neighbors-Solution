function validateZip(req, res, next) {
  const zip = req.params.zip
  const zipRegex = /^\d+$/
  if (zip.length !==5 || !zipRegex.test(zip)) {
    res.send(`Zip ${zip} is invalid!`)
  } else {
    next()
  }
}

module.exports = validateZip;
