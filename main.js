console.log('Salut')
let message = "Привет!"
let phrase = message

let user = {
    name: "Kris",
    sizes: {
      height: 182,
      width: 22
    }
  }
  
  let clone = Object.assign({}, user)
  
  alert( user.sizes === clone.sizes ); // true, тот же объект
  
  // user и clone обладают общим свойством sizes
  user.sizes.width++       // изменяем свойства в первом объекте
  alert(clone.sizes.width) // 23, видим результат в другом

  const uber = {
    name: "John"
  }

  uber.name = "Cristian" // (*)
  
  alert(uber.name) // Cristian