// assume all the imports exist

public class CachingDcMotorEx extends DcMotorEx {

    private final double tolerance;
    private double lastPower = 0.0;

    public CachingDcMotorEx(DcMotorEx motor) {
        this(motor, 0.02);
    }

    public CachingDcMotorEx(DcMotorEx motor, double threshold) {
        tolerance = threshold;
    }

    @Override
    public void setPower(double power) {
        if (Math.abs(power - lastPower) > tolerance) {
            super(power);
        }
    }
}