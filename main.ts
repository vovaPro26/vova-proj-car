let val = 0
irRemote.connectInfrared(DigitalPin.P11)
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
let distation = turtleBit.ultra()
let dus = randint(1, 3)
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
    if (distation < 25 && distation != 0) {
        dus = randint(1, 2)
        if (dus == 2) {
            turtleBit.state(MotorState.stop)
            basic.pause(500)
            distation = turtleBit.ultra()
            turtleBit.run(DIR.Run_back, 100)
            distation = turtleBit.ultra()
            basic.pause(700)
            distation = turtleBit.ultra()
            turtleBit.state(MotorState.stop)
            distation = turtleBit.ultra()
            basic.pause(500)
            distation = turtleBit.ultra()
            turtleBit.Motor(LR.LeftSide, MD.Forward, 40)
            turtleBit.Motor(LR.RightSide, MD.Forward, 80)
            distation = turtleBit.ultra()
            basic.pause(1700)
            distation = turtleBit.ultra()
            turtleBit.state(MotorState.stop)
        }
        if (dus == 1) {
            turtleBit.state(MotorState.stop)
            basic.pause(500)
            distation = turtleBit.ultra()
            turtleBit.run(DIR.Run_back, 100)
            distation = turtleBit.ultra()
            basic.pause(700)
            distation = turtleBit.ultra()
            turtleBit.state(MotorState.stop)
            distation = turtleBit.ultra()
            basic.pause(500)
            distation = turtleBit.ultra()
            turtleBit.Motor(LR.RightSide, MD.Forward, 40)
            turtleBit.Motor(LR.LeftSide, MD.Forward, 80)
            distation = turtleBit.ultra()
            basic.pause(1700)
            distation = turtleBit.ultra()
            turtleBit.state(MotorState.stop)
        }
    }
})
