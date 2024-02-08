# Integrating a Custom PID(F) Controller

*This recipe does not cover usage for Roadrunner or Command-Based structure.*

[PID(F) controllers](https://www.ctrlaltftc.com/the-pid-controller) are some of the most used controllers in FTC. However, it can be confusing and difficult to properly integrate them into your OpModes. This recipe will go over an example of how to integrate a PID(F) controller alongside a manual control system.

## Ingredients

1. A PID or PIDF controller class (this should be a file that is something like PIDFController.java, or you may use a premade one from a library like FTCLib).
2. A use case for the PID(F).
3. An OpMode or LinearOpMode.

## The Recipe

### Creating a PID(F) Controller

The first part of using a PID(F) controller is creating one. In order to do this, we need to declare the PID(F) controller within the OpMode:

```java
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode; // This example is for a LinearOpMode, though a similar idea applies to regular OpModes.
import org.firstinspires.ftc.teamcode.controllers.PIDController; // This may vary depending on what implementation you are using.
import org.firstinspires.ftc.teamcode.controllers.PIDFController; // This may vary depending on what implementation you are using.

@TeleOp
public class ExampleOpMode extends LinearOpMode {

    // This line creates a PIDF controller named examplePIDF that has coefficients of:
    // kP = 0
    // kI = 0
    // kD = 0
    // kF = 0
    private PIDFController examplePIDF = new PIDFController(0, 0, 0, 0);

    // This line creates a PID controller named examplePID that has coefficients of:
    // kP = 0
    // kI = 0
    // kD = 0
    private PIDController examplePID = new PIDController(0, 0, 0);

    @Override
    public void runOpMode() {
        // OpMode code goes here
    }

}
```

Now that we have our PID(F) controller, we need to use it! One of the most common use cases for a PID(F) controller is moving a motor to a certain motor encoder position. As an example, let's say we had a linear slide and we want to move it to 500 ticks when we press "a", but otherwise we want to be able to move it up and down using the triggers. The following code is for a LinearOpMode (the `while (opModeIsActive())` section would go in the `loop()` function for a OpMode):

```java


public void runOpMode() {
    // Put all of your initialization here.
    DcMotor slides = hardwareMap.dcMotor.get("slides");
    waitForStart();

    int targetPosition = 500;

    // We will use this variable to determine if we want the PIDF to run.
    boolean usePIDF = false;

    Gamepad lastGamepad1 = new Gamepad();
    Gamepad lastGamepad2 = new Gamepad();

    while (opModeIsActive()) {

        // Rising edge detector; runs if and only if "a" was pressed this loop.
        if (gamepad1.a && !lastGamepad1.a) {
            usePIDF = true;
        }


        if (gamepad1.left_trigger > 0) {
            slides.setPower(gamepad1.left_trigger);

            // If we get any sort of manual input, turn PIDF off.
            usePIDF = false;
        } else if (gamepad1.right_trigger > 0) {
            slides.setPower(gamepad1.right_trigger);

             // If we get any sort of manual input, turn PIDF off.
            usePIDF = false;
        } else if (usePIDF) {
            // Sets the slide motor power according to the PIDF output.
            slides.setPower(examplePIDF.calculate(slides.getCurrentPosition(), targetPosition));
        }
    }
}


```

This is a lot, so let's break it down piece by piece. First, we initialize our slide motor, which we call `slides`.

```java
DcMotor slides = hardwareMap.dcMotor.get("slides");
```

Next, we wait for the program to start and declare some variables.

```java
waitForStart();

int targetPosition = 500;

// We will use this variable to determine if we want the PIDF to run.
boolean usePIDF = false;

Gamepad lastGamepad1 = new Gamepad();
Gamepad lastGamepad2 = new Gamepad();
```

`targetPosition` is simply the position we want the slides to go to, which is 500. `usePIDF` stores the state of our system, i.e. whether we want to run the PIDF or use manual control. `lastGamepad1` and `lastGamepad2` are used for [Rising Edge Detectors](https://gm0.org/en/latest/docs/software/tutorials/gamepad.html?detector#rising-edge-detector). In short, they detect when a button is pressed, and ignore when it is held.

The next part is the while loop, which ensures that the code runs in a loop until the OpMode stops.

```java
while (opModeIsActive())
```

We then use a [Rising Edge Detectors](https://gm0.org/en/latest/docs/software/tutorials/gamepad.html?detector#rising-edge-detector) to check if "a" was pressed. If it was, we set `usePIDF` to true in order to tell the program to move to the target position.

```java
// Rising edge detector; runs if and only if "a" was pressed this loop.
if (gamepad1.a && !lastGamepad1.a) {
    usePIDF = true;
}
```

The next part is a little complicated, but the idea is that we only want to call `slide.setPower()` once, so we group all of the ways it can be called together so that they can't happen at the same time.

First, we check if the left trigger is pressed. If it is, we set the slide power to an appropriate value and switch to manual control mode by setting `usePIDF` to `false`.

```java
if (gamepad1.left_trigger > 0) {
    slides.setPower(gamepad1.left_trigger);

    // If we get any sort of manual input, turn PIDF off.
    usePIDF = false;
}
```

Next, we do the same check, but for the right trigger. 


```java
else if (gamepad1.right_trigger > 0) {
    slides.setPower(gamepad1.right_trigger);

        // If we get any sort of manual input, turn PIDF off.
    usePIDF = false;
}
```

Note that we only run this code if the left trigger is not pressed, so even if we press both at the same time, there won't be any issues.

**Tip:** If your triggers return nonzero values even when they are not being pressed, you can simply increase the minimum value (the `0` in the statement `if (gamepad1.left_trigger > 0)`) from `0` to something like `0.1`.

Finally, if there are no manual inputs, and we are in the PID(F) state, we run the PID(F).

```java
else if (usePIDF) {
    // Sets the slide motor power according to the PIDF output.
    slides.setPower(examplePIDF.calculate(slides.getCurrentPosition(), targetPosition));
}
```

This is a pretty standard way of using the PID(F) output to set a motor power. `slides.getCurrentPosition()`, as the name implies, just returns the current slide position, in ticks. The [*FTCLib*](https://ftclib.org/) PID(F) assumes that the first input of the function is the place where your motor is, and the second input is the place where your motor wants to be. We will be using the *FTCLib* PID(F) syntax here for the sake of having some standard, but either way works.

If you've read through this entire thing, then congrats! You should now have a fully functioning PID(F) controller that you can implement anywhere, even in conjunction with manual control.

Note that the example we went through is just one way PID(F)s can be used, and there are many ways to achieve this result. Don't worry if your code doesn't look exactly like mine!

As an aside, the technique we used to make sure the PID(F) control and manual control did not interfere is a simple version of what's known as a [**Finite State Machine**](https://gm0.org/en/latest/docs/software/concepts/finite-state-machines.html). This idea of having multiple possible states and only running one at a time to ensure they don't interfere can be used for much more complex systems, such as controlling an entire Autonomous!

Best of luck with your code!

*Last updated: 2024-01-20*