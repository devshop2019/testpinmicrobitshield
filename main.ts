function RunMotor (index: number, pwm: number, dir: number) {
    if (index == 0) {
        if (dir == 0) {
            pins.analogWritePin(AnalogPin.P13, pwm)
            pins.analogWritePin(AnalogPin.P14, 0)
        } else {
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, pwm)
        }
    }
    if (index == 1) {
        if (dir == 0) {
            pins.analogWritePin(AnalogPin.P15, pwm)
            pins.analogWritePin(AnalogPin.P16, 0)
        } else {
            pins.analogWritePin(AnalogPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, pwm)
        }
    }
}
function RunTestPWM_MicrobitShield () {
    Run2MotorDC(0, 1023, 0, 1023)
    basic.showIcon(IconNames.Heart)
    Run2MotorDC(0, 500, 0, 500)
    basic.showIcon(IconNames.SmallHeart)
    Run2MotorDC(0, 0, 0, 0)
    basic.showIcon(IconNames.Diamond)
    Run2MotorDC(1, 1023, 1, 1023)
    basic.showIcon(IconNames.Target)
    Run2MotorDC(1, 512, 1, 512)
    basic.showIcon(IconNames.SmallDiamond)
    Run2MotorDC(0, 0, 0, 0)
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P13, 1023)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
})
function setupAllPinPullup () {
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P10, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
}
function show (num: number) {
    serial.writeLine("" + (num))
}
function Run2MotorDC (dir1: number, pwm1: number, dir2: number, pwm2: number) {
    RunMotor(0, pwm1, dir1)
    RunMotor(1, pwm2, dir2)
    basic.pause(2000)
}
function ReadStatusPullupPin () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        show(0)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        show(1)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        show(2)
    } else if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        show(3)
    } else if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        show(4)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        show(5)
    } else if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        show(6)
    } else if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        show(7)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        show(8)
    } else if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        show(9)
    } else if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        show(10)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        show(11)
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        show(12)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        show(13)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        show(14)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        show(15)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        show(16)
    }
}
basic.forever(function () {
    RunTestPWM_MicrobitShield()
})
