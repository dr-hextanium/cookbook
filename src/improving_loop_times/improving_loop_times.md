# Improving Loop Times

## Recipe

**This recipe will first cover the various methods to improve loop times. At the end there is a full example of mode that uses all these methods**

### Why are fast loop times important?

If things are being updated more often, they will be more responsive to button clicks and joystick changes. This can make driving easier. Additionally, if you are using PID(F) controllers, the more frequently they update powers. They will oscilate less around a target and the more accurately reach the target.

### What causes slow loop times?

The main things that take a long time are not any calculations, unless they are very very complex, or making classes and stuff like that. Most of the time is used on hardware reads and hardware writes. Hardware reads are things like getting an encoder position, reading a color sensor, anything that retrieves data. Hardware writes are sending data to the hub, so setting a motor power and setting a servo position.

### Checking loop times

```java
// assume that this is enclosed in an entire op mode

ElapsedTime elapsedTime = new ElapsedTime();

public void loop() {
    elapsedTime.reset();

    // do stuff

    telemetry.addData("Loop Times", elapsedTime.milliseconds());
}
```

### Bulk Reading

Reads (with the exception of I2C) can be done in one command. By default, every time you do a hardware read, it sends a new command to retrieve it. Using one command to retrieve ALL the data is bulk reading.

This recipe will not go into the different bulk reading modes. To learn more look [here](https://gm0.org/en/latest/docs/software/tutorials/bulk-reads.html).

### Photon

Trying to explain what photon actually does it outside the scope of this recipe. If you are interested, Eeshwar (the person who wrote photon) has a [blog](https://blog.eeshwark.com/robotblog/photonftc-basic-explanation) that simply explains it. [Here](https://github.com/Eeshwar-Krishnan/PhotonFTC/tree/main) is the github repo that has instructions for installing photon.

**Some people have installed photon and Android Studio does not recognize the `@Photon` annotation. Instead of `implementation 'com.github.Eeshwar-Krishnan:PhotonFTC:v3.0.1-ALPHA'`, try `implementation 'com.github.Eeshwar-Krishnan:PhotonFTC:main-SNAPSHOT'`.**

**Also, be warned. Photon somtimes when used just randomly reverses motors and servos (but it's always the same ones reversed the same way).**

### Caching Motor Powers

So now let's try and reduce unnecessary hardware writes. If a motor is going at 0.5 power and we keep setting the power to 0.5, the output of the motor will not change, but these are all hardware writes and take time (there is a slight caveat here with how the sdk handles duplicate powers, but that is outside the scope of this recipe). What if we set the power to 0.51 instead? The output will probably be pretty much the same, but that also takes a hardware write.

So, what we're going to do is store the last power send to a motor and check every new `setPower()` command to only run if the new power is more than a certain threshold above the last power.

This is the most simplistic implementation of caching motor powers and only supports (it assumes) RUN_WITHOUT_ENCODER.
```java
{{#rustdoc_include CachingDcMotorEx.java::}}
```

### Full Example

```java
{{#rustdoc_include OptimizedOpMode.java::}}
```