enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(adresa)
})
radio.onReceivedValue(function (name, value) {
    if (parseFloat(name) == adresa) {
        if (value < 0) {
            basic.showArrow(ArrowNames.West)
            basic.pause(500)
            basic.clearScreen()
            radio.sendValue(convertToText(adresa - 1), value)
        } else {
            if (value == adresa) {
                if (onOff == -2) {
                    basic.showIcon(IconNames.Heart)
                } else {
                    basic.showIcon(IconNames.Yes)
                }
                basic.showArrow(ArrowNames.West)
                basic.pause(500)
                basic.clearScreen()
                radio.sendValue(convertToText(adresa - 1), onOff)
            } else {
                basic.showArrow(ArrowNames.East)
                basic.pause(500)
                basic.clearScreen()
                radio.sendValue(convertToText(adresa + 1), value)
            }
        }
    }
})
let onOff = 0
let adresa = 0
radio.setGroup(5)
adresa = 1
onOff = -2
basic.forever(function () {
    basic.clearScreen()
    if (input.temperature() > 30) {
        onOff = -2
    } else {
        onOff = -1
    }
    basic.pause(5000)
})
