enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("1", 2)
})
radio.onReceivedValue(function (name, value) {
    if (parseFloat(name) == adresa) {
        if (value < 0) {
            radio.sendValue(convertToText(adresa - 1), value)
        } else {
            if (value == adresa) {
                radio.sendValue(convertToText(adresa - 1), onOff)
            } else {
                radio.sendValue(convertToText(adresa + 1), value)
            }
        }
    }
})
let onOff = 0
let adresa = 0
adresa = 1
onOff = -2
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    basic.pause(200)
    basic.clearScreen()
    if (input.temperature() > 30) {
        onOff = -2
        basic.showIcon(IconNames.No)
    } else {
        onOff = -1
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
    basic.pause(2000)
})
