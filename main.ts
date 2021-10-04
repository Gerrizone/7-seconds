let start = 0
let eltelt = 0
let pont = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    eltelt = input.runningTime() - start
    pont = eltelt - Math.abs(7000)
    basic.showNumber(pont)
})
basic.forever(function () {
	
})
