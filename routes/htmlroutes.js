const path = require("path");
const router = require("express").Router();

// JOIN PATH FROM NOTES TO NOTES.HTML
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__direname, "./public/notes.html"));
});
//JOIN PATH FROM A CATCHALL TO INDEX.HTML
router.get("*", function (req, res) {
  res.sendFile(path.join(__direname, "./public/index.html"));
});

module.exports = router;
