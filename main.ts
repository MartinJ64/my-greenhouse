let SoilHue = 0
let HumidHue = 0
let TempHue = 0
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(8)
let statusLEDs = zipLEDs.statusLedsRange()
basic.forever(function () {
    TempHue = Math.map(kitronik_smart_greenhouse.temperature(TemperatureUnitList.C), 0, 40, 210, 0)
    HumidHue = Math.map(kitronik_smart_greenhouse.humidity(), 0, 100, 35, 150)
    SoilHue = Math.map(kitronik_smart_greenhouse.readIOPin(kitronik_smart_greenhouse.PinType.analog, kitronik_smart_greenhouse.IOPins.p1), 0, 1023, 35, 150)
    statusLEDs.setZipLedColor(0, TempHue)
    statusLEDs.setZipLedColor(1, HumidHue)
    statusLEDs.setZipLedColor(2, SoilHue)
    zipLEDs.show()
})
