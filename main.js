alert("welkome detka")

const phoneBook = {
    list: {
      "John": 123456789,
    },
    add(name, number) {
      phoneBook.list[name] = number
    }
  }
  
  const phoneBookCopy = Object.assign({}, phoneBook)
  phoneBookCopy.list = {}
  console.log(phoneBookCopy) 
  
  phoneBookCopy.add('Art', '123')
  console.log(phoneBookCopy)
  console.log(phoneBook)