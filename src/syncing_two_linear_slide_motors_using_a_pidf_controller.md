# Syncing Two Linear Slide Motors Using a PIDF Controller

### Ingredients

1. A PID(F) controller
2. Tuned PID(F) coefficients

## The Recipe

### The Problem

Linear slides powered by two different motors can end up twisted, with one slide higher than the other. This can happen if the two encoders get out of sync. If you are using the RUN_TO_POSITION motor mode, this causes one slide to be supplied more power than the other and even if you are using a PIDF controlleron each motor, the same problem would occur.

### Methodology

**The BEST way to keep these in sync is to have them be mechanically connected with a bar or a piece of channel. If the two act as one rigid body, then it is a lot less dependent on software. However, we acknowledge that this is not always possible, hence the software solutions.**

So, the way we're going to set this up is with a leader and a follower linear slide motor. This means we will use a PID(F) controller on one of the linear slide positions and just set that power to both motors. This resolves the issue of the two linear slides being supplied different powers. If both motors are going the same speed and both linear slides are well tensioned (whether it's belt or string) then the linear slides should stay synced.

### Code Example

This code example is going to assume you have a working PID(F) controller class and tuned coefficients.

```java
// PID(F) declaration
// kp = 0, ki = 0, kd = 0, kf = 0;

private PIDFController examplePIDF = new PIDFController(0, 0, 0, 0);

public void runOpMode() {
    int targetPosition = 0;

    // motor setup
    DcMotorEx leftSlide = hardwareMap.get(DcMotorEx.class, "leftSlide");
    DcMotorEx rightSlide = hardwareMap.get(DcMotorEx.class, "rightSlide");

    waitForStart();

    while(opModeIsActive()) {
        /* 
        Calculates PID based only on one encoder.
        This can also be the average position of the two linear slides, but we haven't noticed much difference
        */
        double power = PIDFController.update(leftSlide.getCurrentPosition(), targetPosition);

        // see how both motors are getting the same power
        leftSlide.setPower(power);
        rightSlide.setPower(power);
    }
}
```

Hopefully this help!

*Last Updated: 2024-01-25*