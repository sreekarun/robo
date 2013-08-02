robo
====

A node based robot based on Raspberry PI and Arduino ( with johnny five )


![Robo](https://raw.github.com/sreekarun/robo/screenshots/images/robo.png "Robo")


## What Can Robo Do? ##

Move around
Talk 
Tweet 
Video Stream
Respond to commands

## Technology Stack ##

The Heart of Robo is a Raspberry pi running raspbian. It has node.js installed. Motor and Sensor control is done by Arduino.

Raspberry Pi controls the Arduino using Johnny Five 

Robo sends the vital information to cloud storage powered by Firebase.

Robo responds to control signals from cloud storage (Firebase )



## Stack in Detail ##

### Hardware ###

Robo is powered by 4 geared motors ( 200rpm ) and is wired using HBridge driver for bi-directional functionality.
The whole system is driven by a 12v rechargable battery - mounted below the chasis.
The motor drivers are driven by Arduino which inturn is driven by Raspberry pi using Johnny five.

### Speech ###

The speech component is a node wrapper around the festival utility in linux. 


