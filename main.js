alert('Циклы')
console.log('Циклы')
let k = 0;
while (k < 24) {
  console.log(k)
  k = k + 1;
}

let l = 1;

if (l < 4) { // numai cate una
  console.log(l)
  l = l + 1
}
if (l < 4) {
    console.log(l)
    l = l + 1
}

let i = 5;

do {
  console.log(i);
  i = i + 1;
} while (i < 4);

let j = 1
while (j < 20) {
    console.log(j)
    j = j + 1
}

let h = 1

do {
    console.log(h)
    h = h + 1
} while (h < 20)

for (let o = 1; o < 6; o++) {
    console.log(o);
  }

  for (let n = 0; n < 4; n++) { // обычный вариант с тремя аргументами
    console.log(n);
  }
  
  let n = 0; // объявление переменной до цикла
  for (; n < 4; n++) { // вытаскивает ее из цикла
    console.log(n);
  }
  
  for (; n < 4;) { // можно убрать и инкремент
    console.log(n);
      n = n + 1;
  }

for (let c = 1; c < 20; c++) {
    console.log(c)
}

while (true) {
  console.log('начало');
  break;
}
console.log('конец');

for (let t = 0; t < 10; t++) {
    if (t % 2 == 0) continue;
    console.log(t); 
  }
  
  for (let y = 1; y < 10; y++) {
    if (y % 2 == 1) continue;
    console.log(y); 
  }

  