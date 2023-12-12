alert('Numere/Числа')
// возвращает случайное число от 0 до 1
//console.log(Math.random()); // 0.1534768990322
// возвращает минимальное число
//console.log(Math.min(1, 2)); // 1
// возвращает максимальное число
//console.log(Math.max(1, 2)); // 2
// возвращает число возведенное в степень
//console.log(Math.pow(2, 8)); // 256
console.log(Math.random())
console.log(Math.min(3, 7))
console.log(Math.max(3, 7))
console.log(Math.pow(2, 8))

// округление в меньшую сторону
//Math.floor(2.3); // 2;
//Math.floor(2.9); // 2;

// округление в большую сторону
//Math.ceil(1.2); // 2
//Math.ceil(0.1); // 1

// округление до ближайшего числа
//Math.round(2.4); // 2
//Math.round(2.5); // 3

console.log(Math.floor(1.8))
console.log(Math.ceil(1.8))
console.log(Math.round(2.5))

console.log(Math.trunc(5.2)) // 5
console.log(Math.trunc(9.17)) // 9
console.log(Math.trunc(-1.5)) // -1

console.log(0.1 + 0.2 == 0.3); // false из-за ==0.3
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(9999999999999999); // сами увеличиваются 10000000000000000

let num = 12.34;
let num1 = 12.36;
console.log( num.toFixed(1) ); // "12.3"
console.log( num1.toFixed(1)); // "12.4"
console.log( num.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
console.log( num1.toFixed(5)); // "12.36000"



console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( NaN === NaN ); // false

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, потому что специальное значение: NaN
console.log( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

let num2 = +prompt("Enter a number", '');

// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
console.log( isFinite(num2) );

console.log( Number.isNaN(NaN) ); // true
console.log( Number.isNaN("str" / 2) ); // true



// Обратите внимание на разный результат:
console.log( Number.isNaN("str") ); // false, так как "str" является строкой, а не числом
console.log( isNaN("str") ); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN

console.log( Number.isFinite(123) ); // true
console.log( Number.isFinite(Infinity) ); // false
console.log( Number.isFinite(2 / 0) ); // false

// Обратите внимание на разный результат:
console.log( Number.isFinite("123") ); // false, так как "123" является строкой, а не числом
console.log( isFinite("123") ); // true, так как isFinite сначала преобразует строку "123" в число 123


console.log( +"100px" ); // NaN

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

console.log( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
console.log( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)