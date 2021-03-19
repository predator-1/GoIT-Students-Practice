/**
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.
 * Заметка это объект со свойствами text и priority.
 * Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 * Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority).
 */

class Notes {
  static Priority = {
    LOW: 1,
    NORMAL: 2,
    HIGH: 3,
  };
}
