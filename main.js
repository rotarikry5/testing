console.log('11 Функции')
alert('11 Функции')
function someFunc() { // объявляем функцию someFunc с помощью слова function
    console.log('function starts here'); // начало блока кода
      console.log('2+2='+2+2) // еще несколько строк кода
      console.log('function ends here'); // конец блока кода
  }
  someFunc(); // вызываем функцию (запускаем блок кода)
  console.log('bona sera') // несколько строк кода
  someFunc(); // снова вызываем функцию (запускаем блок кода повторно)
  
function crisRotari(){
    console.log('Esti tare ca piatra bro')
}
crisRotari()
console.log('sa primit')
crisRotari()

function sayHi(name){
    const greeting = 'Salut, ' + name + '!'
    console.log(greeting)
}

sayHi('Danilka')
sayHi('Cristian')

function beautiFul(name){
    const greeting = name + ' ești cea mai frumi' + '!'
    console.log(greeting)
}
beautiFul('Otilia')

let user = 'Cristian'
function changeUserName(){
    user = 'Kry5'
    console.log(user)
}
console.log(user)
changeUserName()

function sum(a, b){
    return a + b
}
let result = sum(20, 3)
console.log(result)

function checkAge(age){
    if (age >= 18) {return true}
    else {return confirm('Deja se poate?')}
}

function showMovie(age){
    if (!checkAge(age)){
        return
    }
    console.log("Va arata un film)")
}


