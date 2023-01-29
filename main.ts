input.onButtonPressed(Button.A, function () {
    Klik += 1
})
input.onButtonPressed(Button.B, function () {
    Klik += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Klik)
})
let Klik = 0
Klik = 0
Klik = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
