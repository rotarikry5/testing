console.log('Объекты: введение')
const phoneBook = {
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  }
  
  console.log(phoneBook)
// нотация точки
console.log(phoneBook.John); // 123456789
// нотация квадратных скобок
console.log(phoneBook["Jane Doe"]); // 987654321

// в нотации с точкой нельзя использовать пробелы
console.log(phoneBook["Jane Doe"]); // будет ошибка
// строка в квадратных скобках
console.log(phoneBook["Jane Doe"]); // 987654321

phoneBook["Katie Johnson"] = 456789123; // добавить запись
phoneBook["Jane Doe"] = 222222222; // обновить запись
delete phoneBook["Jim Smith"]; // удалить запись

const iphone = {
    "Cristian" : 37360546136,
    "Danilka" : 37360920120,
    "Mama" : 37369939741
}
console.log(iphone)
iphone["Otilia"] = 40799645579
delete iphone["Danilka"]
iphone["Danilka"] = 65152478

const phone = {
    list: { // перенесли все контакты в свойство list
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
    log() { // добавили метод log
          console.log('its a phonebook!')
    }
  };
  
  phone.log(); // its a phonebook!

  const book = {
    list: {
      "Soska": 123456789,
      "Jana Friski": 987654321,
      "Misheli Siski": 111111111
    },
    log() {
          console.log(this.list) // в этом случае this.list === phoneBook.list
    }
  };
  
  book.log(); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }

