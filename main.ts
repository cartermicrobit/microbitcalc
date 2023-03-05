let numbertoadd = 0
let number = 0
input.onButtonPressed(Button.A, function () {
    numbertoadd += 1
    basic.showNumber(numbertoadd)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number + numbertoadd)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    number += 1
    basic.showNumber(number)
})
basic.forever(function () {
	
})
