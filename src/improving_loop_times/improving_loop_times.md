# Improving Loop Times

## Recipe

**This recipe will cover various methods to improve loop times. At the end there are full examples of code that combine these methods**

### Why are fast loop times important?

The more often your teleop is updated, the more responsive it will be to button clicks and joystick changes.
This can make driving easier.
Additionally, if you are using PID(F) controllers, the more frequently they update the more accurate they are and the less they oscillate.

### What causes slow loop times?

Surprisingly, the main cause of slow loop times is not processing difficulties or code complexity.
Most of the processing time is spent on communicating with hardware devices, known as hardware "reads" and hardware "writes".

Hardware reads are when you are receiving data.
For example, getting an encoder position, reading a color sensor, or accessing the IMU are all hardware reads.
On the other hand, hardware writes are when you are sending data.
For example, setting a motor power, setting a servo position, or configuring an LED are all hardware writes.

### Checking loop times

Here is some basic code to measure your loop times in milliseconds.
The more milliseconds your loop takes, the slower your loop times are.

This measures looptimes over a single loop, which can lead to unstable readings,
but is good enough.

```java
{{#rustdoc_include MeasuringLoopTimes.java:6:}}
```

You may want to try:
- Average looptimes over the whole runtime (totalRuntime / numberOfLoops).
- Measuring looptimes over a window (over 100 loops, over 50 loops, etc).

In order to get a better idea of your stable loop times.

Some of the optimisations we look at may increase the looptime variance, as some
loops may be very short, while others may be much longer.

### Bulk Reading

Other than I2C devices, reading can be done all at once in a "bulk read" for a huge loop time improvement.

By default, every time you do a hardware read, a new command is sent to retrieve it.
Using one command to retrieve ALL the data is bulk reading.

This recipe will not go into the different bulk reading modes. To learn more look [here](https://gm0.org/en/latest/docs/software/tutorials/bulk-reads.html).

### Caching Motor Powers

So now let's try and reduce unnecessary hardware writes.

If a motor is going at 0.5 power, and we keep setting the power to 0.5, the output of the motor will not change.
However, each one of those `setPower()` commands is a hardware write which will delay your loop.
A simple solution to this is to only send a new motor power when it is different from the previous.
The SDK has this built in for this 'exactly equal' case.

However, we can go even further then just difference to remove much more unnecessary writes.
If the motor is currently running at 0.5 power, and you tell it to run at 0.51 power instead, it will have very little effect.
However, it will unnecessarily perform a loop-delaying hardware write.

Instead, you can store the last power sent to a motor and check every new `setPower()` command to only run if the new power is sufficiently different from the previous power.

Implementations of hardware devices with these optimisations applied are
available [here](https://github.com/Dairy-Foundation/CachingHardware).
This github page provides the installation and usage instructions, so this
recipe won't cover them.

### Photon

Photon is another way of increasing loop times.
Photon is an experimental library developed by Eeshwar, an alumni originally from team 7244.
It allows for significantly faster loop times by parallelizing much more of the hardware reads and writes.
Installation instructions for Photon are available [here](https://github.com/Eeshwar-Krishnan/PhotonFTC).

If you have Photon installed, you don't need to use CachingHardware, as Photon
has its own caching hardware. Note that Photon is more advanced than
CachingHardware, so it does the optimisations automatically.

Photon has a few known issues at the moment, here's some troubleshooting steps:

**Some people have installed photon and Android Studio does not recognize the `@Photon` annotation. Instead of `implementation 'com.github.Eeshwar-Krishnan:PhotonFTC:v3.0.1-ALPHA'`, try `implementation 'com.github.Eeshwar-Krishnan:PhotonFTC:main-SNAPSHOT'`.**

**Also, be warned. Photon sometimes when used just randomly reverses motors and servos (but it's always the same ones reversed the same way).**

### Full Examples

This example uses [CachingHardware](https://github.com/Dairy-Foundation/CachingHardware)
```java
{{#rustdoc_include CachingOptimizedOpMode.java:12:}}
```

This example uses [Photon](https://github.com/Eeshwar-Krishnan/PhotonFTC)
```java
{{#rustdoc_include PhotonOptimizedOpMode.java:13:}}
```
*Last Updated: 2024-10-14*
