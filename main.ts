input.onButtonPressed(Button.A, function () {
    Klik += 1
})
input.onPinPressed(TouchPin.P2, function () {
    Zrus = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (true) {
        Cas += 1
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    Klik += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Zrus = 1
    basic.showNumber(Klik)
    basic.showString("A")
    basic.showNumber(Cas)
})
let Zrus = 0
let Cas = 0
let Klik = 0
Klik = 0
Cas = 0
Zrus = 0
basic.forever(function () {
    while (Zrus == 0) {
        basic.showNumber(Cas)
    }
})
