let finish = 0
let start = 0
input.onButtonPressed(Button.A, function () {
    finish = input.runningTime()
    basic.showNumber(finish - start)
    serial.writeNumber(finish - start)
})
input.onButtonPressed(Button.B, function () {
    start = input.runningTime()
    basic.showString("Start time ")
    basic.showNumber(start)
})
