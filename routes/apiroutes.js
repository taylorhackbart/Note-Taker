const router = require("express").Router();
const action = require("../db/action.js");

//GETTING NOTES
router.get("/notes", function (req, res) {
  action.getNotes().then((notes) => res.json(notes));
});

//CREATING NEW NOTES
router.post("/notes", function (req, res) {
  action.addNote(req.body).then((note) => res.json(note));
});

//DELETING NOTES BASED ON THEIR ID VALUE
router.delete("/notes/:id", function (req, res) {
  action.removeNote(req.params.id).then(() => res.json({ extended: true }));
});

module.exports = router;
