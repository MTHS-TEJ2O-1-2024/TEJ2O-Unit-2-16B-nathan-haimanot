/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Nov 2024
 * This program uses the bluetooth radios
*/

// variables
let distanceToObject: number = 0
radio.setGroup(1)

// sonar setup and click a

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.clearScreen()

    // if distance is < 10 send msg
    if (distanceToObject < 10) {
        radio.sendString("Too Close")
        basic.showIcon(IconNames.Yes)

    }

    // recieve
    radio.onReceivedString(function (receivedString) {
        basic.clearScreen()
        basic.showString(receivedString)
        basic.showIcon(IconNames.Happy)
    })

})
