# Target Velocity is Positive When Measured Velocity is Negative and Vice Versa When Tuning Manual Feedforward

If MotorDirectionDebugger works perfectly, this simply means that either your right side encoders are plugged in to the wrong ports(so swap frontRight and backRight encoder cables) or your left side encoders are plugged in to the wrong ports(so swap frontLeft and backLeft encoder cables). An easy way to debug this is to add a printEncoderValues telemetry method in SampleMecanumDrive.

```java
public void printEncoderValues(Telemetry telemetry) {
        telemetry.addData("LeftFrontPos: ", leftFront.getCurrentPosition());
        telemetry.addData("RightFrontPos: ", rightFront.getCurrentPosition());
        telemetry.addData("LeftRearPos: ", leftRear.getCurrentPosition());
        telemetry.addData("RightBackPos: ", rightRear.getCurrentPosition());
} 

Then at the end of every loop in MotorDirectionDebugger, call drive.printEncoderValues(telemetry);```
*Last updated: 2024-01-20*
