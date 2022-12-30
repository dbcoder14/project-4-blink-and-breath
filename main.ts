let val = 0
led.enable(false)
basic.forever(function () {
    while (val < 1024) {
        val = val + 2
        pins.analogWritePin(AnalogPin.P0, val)
        basic.pause(5)
    }
    basic.pause(5)
    while (val > 0) {
        val = val - 2
        pins.analogWritePin(AnalogPin.P0, val)
        basic.pause(5)
    }
})
