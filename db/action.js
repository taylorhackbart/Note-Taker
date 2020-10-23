const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuidv1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Action {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((response) => {
      let parseNotes;
      try {
        parseNotes = [].concat(JSON.parse(response));
      } catch (err) {
        parseNotes = [];
      }
      return parseNotes;
    });
  }
  addNote(note) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv1()};
    return this.getNotes()
      .then((response) => {
        return [...response, newNote];
      })
      .then((updatedNotes) => {
        return this.write(updatedNotes);
      })
      .then(() => {
        return newNote;
      });
  }

  deleteNote(id) {
    return this.getNotes()
      .then((remove) => remove.filter((deletedNote) => deletedNote.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Action();
