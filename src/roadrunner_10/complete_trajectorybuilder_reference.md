# Complete TrajectoryBuilder Reference

### Ingredients

1. A fully tuned Road Runner 1.0 setup _**or**_ [MeepMeep for Road Runner 1.0](https://github.com/acmerobotics/MeepMeep)

### The Problem

The current [TrajectoryBuilder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/) in 
the official Road Runner 1.0 docs only has a few TrajectoryBuilder methods, and does
not explain them very well in depth. This is a complete reference for more methods in
the TrajectoryBuilder class for Road Runner 1.0.

## TrajectoryBuilder Reference

### Path Primitives #

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{6}$.

`lineToX(x: double)` & `.lineToXConstantHeading(x: double)`

```java
.lineToX(48)
.lineToXConstantHeading(48)
```

WARNING: It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://cookbook.dairy.foundation/roadrunner_10/null_list_error_in_rr_10.html#the-problem)  // Robot moves to the specified x coordinate in the direction of the robot heading (straight line)
// Both of these do the exact same thing and are effectively the same.
// 🚨 Will cause an error if your heading is perpendicular to direction your robot is traveling! 🚨 

`lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

```java
.lineToY(48)
.lineToYConstantHeading(48)
```


*Last Updated: 2024-07-02*
