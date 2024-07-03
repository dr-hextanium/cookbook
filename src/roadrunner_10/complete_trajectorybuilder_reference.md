# Complete TrajectoryBuilder Reference

### Ingredients

1. A fully tuned Road Runner 1.0 setup _**or**_ [MeepMeep for Road Runner 1.0](https://github.com/acmerobotics/MeepMeep)

### The Problem

The current [TrajectoryBuilder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/) in 
the official Road Runner 1.0 docs only has a few TrajectoryBuilder methods, and does
not explain them very well in depth. This is a complete reference for more methods in
the TrajectoryBuilder class for Road Runner 1.0.

---

## TrajectoryBuilder Reference

### Table of Contents

1. [`strafeTo(new Vector2d(double: x, double: y))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
2. [`lineToX(x: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoxx-double--linetoxconstantheadingx-double)
3. [`lineToY(y: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoyy-double--linetoyconstantheadingy-double)

### Path Primitives

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{6}$.

#### `waitSeconds(double: seconds)`

> 🚨 **WARNING:** 🚨  
> Ensure that you are using `waitSeconds()` and not `wait()`. All Java objects have a `wait()` function which causes the current thread to wait until another thread invokes a `notify()` or `notifyAll()` method. See further details in the [Oracle JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#wait()). We don't care for this function but it does show up in intellisense. Make sure you are using the `waitSeconds()` function instead of `wait()`.

```java
// Robot waits for the specified time in seconds
// This is a simple wait segment that is useful for running actions in between trajectories.

.waitSeconds(5)
```

---

#### `turn(Math.toRadians(double: angle))`



```java
// Robot turns
// This is a turn

.turn(angle)
.turnTo(heading)
```

---

#### `.strafeTo(new Vector2d(double: x, double: y))` & `.strafeToConstantHeading(new Vector2d(x: double, y: double))`

```java
// Robot moves to the specified coordinates while maintaining the heading.
// Both `strafeTo()` and `strafeToConstantHeading()` do the exact same thing and are effectively the same.
// So, if you start at a 90 degree angle, it will keep that angle the entire path.

.strafeTo(new Vector2d(48, 48))
.strafeToConstantHeading(new Vector2d(48, 48))
```

---

#### `lineToX(x: double)` & `.lineToXConstantHeading(x: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double) instead of any `lineTo()`'s! 🚨 

```java
// Robot moves to the specified x coordinate in the direction of the robot heading (straight line).
// Both `lineToX()` and `lineToXConstantHeading()` do the exact same thing and are effectively the same.
// 🚨 Will cause an error if your heading is perpendicular to direction your robot is traveling! 🚨

.lineToX(48)
.lineToXConstantHeading(48)
```

---

#### `lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double) instead of any `lineTo()`'s! 🚨

```java
// Robot moves to the specified y coordinate in the direction of the robot heading (straight line).
// Both `lineToY()` and `lineToYConstantHeading()` do the exact same thing and are effectively the same.
// 🚨 Will cause an error if your heading is perpendicular to direction your robot is traveling! 🚨

.lineToY(36)
.lineToYConstantHeading(36)
```

*Last Updated: 2024-07-02*