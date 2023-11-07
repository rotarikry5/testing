alert('Объекты: подробнее')

const myIphone = {
    list: {
        "Mama": 123456789,
        "Tata": 987654321,
        "Danilka": 97531
    },
    add(name, number) {
        this.list[name] = number
    }
}

myIphone.add("Eu", 2468)
console.log(myIphone.list['Eu'])


const phoneBook = {
    list: {
      "Vasika": 123456789,
      "Mumia": 987654321,
      "Svabra": 111111111
    },
  };
  
  for (const name in phoneBook.list) {
    console.log(name)
    console.log(phoneBook.list[name] )
  }