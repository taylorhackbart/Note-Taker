const router = require("express").Router();
const action = require("../db/action");

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
  action.deleteNote(req.params.id).then(() => res.json({ ok : true }));
});

module.exports = router;
