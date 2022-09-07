input.onButtonPressed(Button.A, function () {
    if (ColourSetting == 5) {
        ColourSetting = 0
    } else {
        ColourSetting += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    kitronik_smart_greenhouse.clearData()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Temp")
    basic.showNumber(kitronik_smart_greenhouse.temperature(TemperatureUnitList.C))
    basic.showString("Pressure")
    basic.showNumber(kitronik_smart_greenhouse.pressure(PressureUnitList.mBar))
    basic.showString("Humidity")
    basic.showNumber(kitronik_smart_greenhouse.humidity())
    basic.showString("Soil")
    basic.showNumber(kitronik_smart_greenhouse.readIOPin(kitronik_smart_greenhouse.PinType.analog, kitronik_smart_greenhouse.IOPins.p0))
})
let ColourSetting = 0
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(8)
let zipStick = zipLEDs.zipStickRange()
ColourSetting = 0
basic.forever(function () {
    if (ColourSetting == 0) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.White))
    } else if (ColourSetting == 1) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Red))
    } else if (ColourSetting == 2) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Green))
    } else if (ColourSetting == 3) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Blue))
    } else if (ColourSetting == 4) {
        zipStick.showColor(kitronik_smart_greenhouse.rgb(220, 75, 200))
    } else if (ColourSetting == 5) {
        zipStick.clear()
        zipStick.show()
    }
})
