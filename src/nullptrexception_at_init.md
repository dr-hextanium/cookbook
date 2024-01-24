# The NullPointerException on Initialization

**Common causes to the error, and how to fix it...**

Have you ever tried initializing your OpMode in the REV Driver Station and getting an error message that reads - *User code threw an uncaught exception: NullPointerException* ? If so, don't worry, this is a very common error that is typically quick and easy to fix. 

## NullPointerExceptions Explained

Simply put, a NullPointerException occurs when your program attempts to use an object with a null value(**has not been initialized yet**). Your program cannot use the object because its reference points nowhere... *Learn more here: [*JavaNPE*](https://docs.oracle.com/javase/8/docs/api/java/lang/NullPointerException.html)

## Example

Here are some examples of FTC Code that would throw a NullPointerException: 

```java 
... //your imports

@TeleOp
public class Example extends LinearOpMode {

    public DcMotor lift; //We should have our example three objects declared here
    public DcMotor intake;
    public Servo pivot;

    @Override
    public void runOpMode() {

        lift  = hardwareMap.get(DcMotor.class, "Lift"); 
        intake = hardwareMap.get(DcMotor.class, "Intake");
        //However, we only have two objects initialized here. We are missing the "Servo: pivot" initialization

        waitForStart();

        while (opModeisActive()) {

            if (gamepad1.a) {
                pivot.setPosition(.5); //We do not have the "pivot" Servo initialized, yet we are trying to use this object. This will throw a NullPointerException...
            }

        }
    }
}

```

## Solution 

Make sure to intitialize 'public Servo pivot;' in 'public void runOpMode()'. Corrected code: 

```java 
... //your imports

@TeleOp
public class Example extends LinearOpMode {

    public DcMotor lift; //We should have our example three objects declared here
    public DcMotor intake;
    public Servo pivot;

    @Override
    public void runOpMode() {

        lift  = hardwareMap.get(DcMotor.class, "Lift"); 
        intake = hardwareMap.get(DcMotor.class, "Intake");
        pivot = hardwareMap.get(DcMotor.class, "Intake);

        waitForStart();

        while (opModeisActive()) {

            if (gamepad1.a) {
                pivot.setPosition(.5); 
            }

        }
    }
}

```




