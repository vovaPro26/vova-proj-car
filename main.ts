let val = 0
irRemote.connectInfrared(DigitalPin.P11)
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
let distation = turtleBit.ultra()
basic.forever(function () {
    distation = turtleBit.ultra()
    val = irRemote.returnIrButton()
    if (val != 0 && (distation > 10 || distation == 0)) {
        if (val == 70) {
            turtleBit.run(DIR.Run_forward, 100)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (val == 68) {
            turtleBit.Motor(LR.LeftSide, MD.Forward, 40)
            turtleBit.Motor(LR.RightSide, MD.Forward, 85)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (val == 67) {
            turtleBit.Motor(LR.LeftSide, MD.Forward, 85)
            turtleBit.Motor(LR.RightSide, MD.Forward, 40)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (val == 21) {
            turtleBit.run(DIR.Run_back, 100)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        } else if (val == 64) {
            turtleBit.state(MotorState.stop)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (val == 66) {
            turtleBit.run(DIR.Turn_Right, 100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        } else if (val == 74) {
            turtleBit.run(DIR.Turn_Left, 100)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        } else if (val == 94) {
            turtleBit.Motor(LR.RightSide, MD.Back, 33)
            turtleBit.Motor(LR.LeftSide, MD.Back, 66)
        } else if (val == 12) {
            turtleBit.Motor(LR.LeftSide, MD.Back, 33)
            turtleBit.Motor(LR.RightSide, MD.Back, 66)
        }
    }
    if (distation < 15 && distation != 0) {
        turtleBit.state(MotorState.stop)
        basic.pause(500)
        turtleBit.run(DIR.Run_back, 100)
        basic.pause(700)
        turtleBit.state(MotorState.stop)
        basic.pause(500)
        turtleBit.Motor(LR.LeftSide, MD.Forward, 40)
        turtleBit.Motor(LR.RightSide, MD.Forward, 80)
        basic.pause(1700)
        turtleBit.state(MotorState.stop)
    }
})
