val = 0
led.enable(False)

def on_forever():
    global val
    while val < 1024:
        val = val + 1
        pins.analog_write_pin(AnalogPin.P0, val)
        basic.pause(5)
    while val > 0:
        val = val - 1
        pins.analog_write_pin(AnalogPin.P0, val)
        basic.pause(5)
basic.forever(on_forever)
