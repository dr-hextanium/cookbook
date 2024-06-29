# How to Integrate a PIDF Controller With Roadrunner

*This recipe will assume you have a functioning PIDF controller that has already been tuned. If you do not, refer to [integrating a custom PIDF controller](./how_to_integrate_a_PIDF_controller_with_roadrunner.md).*

## Ingredients

1. A PID or PIDF controller class
2. Tuned PID(F) gains
3. An OpMode or LinearOpMode
4. A Finite State Machine

## The Recipe

### PID(F) Controller and gains

This recipe assumes you have 1) a PID(F) class that works and 2) tuned PID(F) gains. 
This recipe will not go over how to implement these; you should reference [integrating a custom PIDF controller](./how_to_integrate_a_PIDF_controller_with_roadrunner.md).

### Finite State Machines

In short, a finite state machine is a code structure which allows code to run linearly while also having quasi-parallel actions running.
The example we will be working with today is driving with Roadrunner while controlling linear slides.
For a more indepth understanding of what finite state machines are, visit [gm0](https://gm0.org/en/latest/docs/software/concepts/finite-state-machines.html?highlight=finite).

You can work with Finite State Machines in either a LinearOpMode or an OpMode, either work. 
For this recipe, we will be using a LinearOpMode.
To use an OpMode, move everything before the while loop into the `init()` function and everything in the while loop into the `loop()` function.

We will first have a full example and then break it down piece by piece.

*This example is more like pseudocode than real code and is meant to demonstrate a methodology.*

```java
{{#rustdoc_include RoadRunnerPIDF.java::}}
```

Okay, let's break this down piece by piece.
First, what is an "enum" and why do we use them? 
Enums are a way to define a set of named constant values. 
They provide a convenient and readable way to work with predefined, named values in your code. 
Here, we used an enum to describe the various states the robot could be in.

```java
{{#rustdoc_include RoadRunnerPIDF.java:3:9}}
```

By using names with meaning like these, it is much clearer when writing and reading the code what each block does. 
It also means we don't have to remember that state 0 means START and state 1 means DRIVE_FORWARD, etc.

Next, we initialize everything and build our trajectories.
The important one to note is creating `strafeLeft`, which includes slide movement.

```java
{{#rustdoc_include RoadRunnerPIDF.java:38:43}}
```

We used a displacement marker, which tells Roadrunner to run this code at the specified position along the trajectory.
The `() -> {}` is the lambda format for a one time use function. 
The empty parentheses indicate that the function requires no arguments, and the curly braces denote the start of the function.
In this case, we're just setting the `targetPosition` variable, but this marker could include setting servo position, reading sensors, or anything else really.

```java
{{#rustdoc_include RoadRunnerPIDF.java:57:66}}
```

So now we're getting to the Finite State Machine (FSM) part. 
The first part of this case, which you'll see in each part, is checking whether previous and current states are equal. 
This allows us to run code the first time it enters this state, like starting a trajectory (in this example). 
Then inside that same block, we also need to set the previous state to the one we're in.

The `else if` just checks if we're done with this state to detect when to move on. 
This is the transition trigger.
In this case, it detects when the Roadrunner trajectory finishes.

The next case is the more interesting one.

```java
{{#rustdoc_include RoadRunnerPIDF.java:67:74}}
```

Here we have the same structure. 
However, this time our transition trigger is finishing the Roadrunner trajectory and the linear slides reaching their target.
Because this runs in a loop, once the displacement marker triggers and changes the targetPosition, the PID update that runs at the end of every loop will move the linear slides accordingly.

It is also important to note that when using async following, you must call drive.update() once every loop. 
This allows Roadrunner to track the robot's movement and to ensure the motors are following the trajectory.
Without it, the robot will not move.

Whew! You should now be able to integrate a PID(F) controller with Roadrunner trajectories.

This example was meant to be general and explain the structure and concepts needed to make PID(F) controllers work with Roadrunner. 
It will almost certainly require changes to make it work exactly how you wish, so don't worry if your code doesn't look exactly like this example!

### State Factory

[State Factory](https://state-factory.gitbook.io/state-factory/installation) is a library which helps abstract a lot of the code of a finite state machine. 
It also helps ensure you don't forget to write a break or an exit case.

*This recipe will not cover the installation of State Factory. 
Please follow the instructions on their gitbook to install it.*

So, we're going to write the same finite state machine but this time using State Factory.

```java
{{#rustdoc_include RoadRunnerPIDFSF.java::}}
```

These two examples both do the exact same thing.
This introduction to State Factory was mostly meant to show how it can simplify writing FSMs.

Android studio may recommend changing something like `() -> !drive.isBusy()` to `!drive::isBusy`. 
These are simply two different ways to write the same thing. 
The double colon works like `class/instance::method`.

**It is important to note that these were extremely simple FSMs and do not demonstrate their full capabilities. 
This was simply meant to show you a way to integrate RoadRunner and a PIDF controller.**

*Last Updated: 2024-01-23*