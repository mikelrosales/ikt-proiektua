input.onButtonPressed(Button.A, function () {
    Numero = randint(0, 15)
    if (Numero == 1) {
        dirua = dirua - 20
    } else if (Numero == 2) {
        dirua = dirua - 20
    } else if (Numero == 3) {
        dirua = dirua - 20
    } else if (Numero == 4) {
        dirua = dirua - 20
    } else if (Numero == 5) {
        dirua = dirua - 20
    } else if (Numero == 6) {
        dirua = dirua - 20
    } else if (Numero == 7) {
        dirua = dirua - 20
    } else if (Numero == 8) {
        dirua = dirua - 20
    } else if (Numero == 0) {
        dirua = dirua - 20
    } else if (Numero == 9) {
        dirua = dirua - 20
    } else if (Numero == 11) {
        dirua = dirua - 20
    } else if (Numero == 10) {
        dirua = dirua - 20
    } else if (Numero == 11) {
        dirua = dirua - 20
    } else if (Numero == 12) {
        dirua = dirua * 10
    } else if (Numero == 13) {
        dirua = dirua - 20
    } else if (Numero == 14) {
        dirua = dirua - 20
    } else if (Numero == 15) {
        dirua = dirua - 20
    }
})
input.onButtonPressed(Button.B, function () {
    let rojo = 0
    let negro = 0
    color = randint(negro, rojo)
    if (color == negro) {
        basic.showString("NEGRO")
        dirua = dirua + 20
    } else if (color == rojo) {
        basic.showString("ROJO")
        dirua = dirua - 30
    }
})
let color = 0
let Numero = 0
let dirua = 0
dirua = 150
