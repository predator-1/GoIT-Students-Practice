/**
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.
 * Заметка это объект со свойствами text и priority.
 * Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 * Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority).
 */

class Note {
  static Priority = {
    LOW: 1,
    NORMAL: 2,
    HIGH: 3,
  };

  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }
}

const note2 = new Note('do this NORMAL', Note.Priority.NORMAL);
const note1 = new Note('do this LOW', Note.Priority.LOW);
const note3 = new Note('do this HIGH', Note.Priority.HIGH);

class Notes {
  #items = [];

  get notes() {
    return this.#items.sort((a, b) => {
      return b.priority - a.priority;
    });
  }

  addNotes(note) {
    this.#items.push(note);
  }

  removeNote(note) {
    const index = this.#items.indexOf(note);
    if (index > -1) {
      this.#items.splice(index, 1);
    }
  }

  updateNotePriority(text, newPriority) {
    // for (const note of this.#items) {
    //   if (note.text === text) {
    //     note.priority = newPriority;
    //     return;
    //   }
    // }
    const index = this.#items.findIndex(value => value.text === text);
    if (index > -1) this.#items[index].priority = newPriority;
  }
}

const notes = new Notes();
notes.addNotes(note2);
notes.addNotes(note1);
notes.addNotes(note3);

notes.removeNote(note1);
console.log(notes.notes);

notes.addNotes(note1);

notes.updateNotePriority('do this LOW', Note.Priority.NORMAL);
const note6 = new Note('do this', Note.Priority.LOW);
const note4 = new Note('do this', Note.Priority.LOW);
const note5 = new Note('do this', Note.Priority.HIGH);
notes.addNotes(note4);
notes.addNotes(note5);
notes.addNotes(note6);

console.log(notes.notes);
