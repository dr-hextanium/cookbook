// imports

@Photon
public class OptimizedOpMode extends OpMode {

    private DcMotorEx exampleMotor;
    private List<LynxModule> allHubs;
    private ElapsedTime elapsedtime;

    @Override
    public void init() {

        elapsedtime = new ElapsedTime();

        // this just sets the bulk reading mode for each hub
        allHubs = hardwareMap.getAll(LynxModule.class);
        for (LynxModule hub : allHubs) {
            hub.setBulkCachingMode(LynxModule.BulkCachingMode.MANUAL);
        }

        exampleMotor = new CachingDcMotorEx(hardwareMap.get(DcMotorEx.class, "example motor"));
        elapsedtime.reset();
    }

    @Override
    public void loop() {
        elapsedtime.reset();
        // clears the cache on each hub
        for (LynxModule hub : allHubs) {
            hub.clearBulkCache();
        }

        telemetry.addData("Motor Position", exampleMotor.getPosition());
        telemetry.addData("Loop Times", elapsedtime.milliseconds());
    }

}