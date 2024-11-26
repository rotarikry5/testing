console.log('Switch')

function myName(){
    let user = 'Cristian'
    console.log(user)
}
myName()

let a = 2 + 2

switch (a) {
    case 3:
        alert('Nu poti mai mult?!')
        break;
    case 4:
        alert('Fucking Genius')
        break
    case 5:
        alert('Prea mult bro')
        break
    default:
        alert("Nu exista asta")
}


let b = 2+1 
switch (b) {
    case 2:
        alert('Putin brother')
    case 3:
        alert('Bingo')
    case 4:
        alert('Nu muciacio')
        default:
            alert("Nema")
}

let c = "1"
let d = 0

switch (+c) {
    case d + 1:
        alert("Se va indeplini, deoarece +c va fi 1, si este egal d+1")
        break

    default:
        alert("Asta nu se va indeplini")
}

let e = 3

switch (e) {
    case 4:
        alert('Corect!')
        break

    case 3:
    case 5:
        alert('incorect amise')
        alert('viziteaza lectiile de mate!')
        break


    default:
        alert('Rezultatul arata straniu')
}


let arg = prompt('Введите число')
switch (arg) {
    case '0':
    case '1':
        alert('Unul sau zero')
        break

    case '2':
        alert('Doi')
        break

    case 3:
        alert('Nu se va indeplini niciodata!')
        break
    default:
        alert('Necunoscuta')
}









