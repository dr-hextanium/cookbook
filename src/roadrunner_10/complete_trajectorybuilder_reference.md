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

1. [`waitSeconds(double: seconds)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#waitsecondsdouble-seconds)
2. [`turn(Math.toRadians(double: angle))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#turnmathtoradiansdouble-angle)
3. [`turnTo(Math.toRadians(double: heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#turnmathtoradiansdouble-angle)
4. [`setTangent(double: r)`]()
5. [`setReversed(boolean: reversed)`]()
6. [`strafeTo(new Vector2d(double: x, double: y))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
7. [`strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
8. [`strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
9. [`lineToX(x: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoxx-double--linetoxconstantheadingx-double)
10. [`lineToY(y: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoyy-double--linetoyconstantheadingy-double)

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
// Robot turns counterclockwise by the specified angle
// This turn is in radians, so you must convert your degrees to radians using `Math.toRadians()`
// By default, the robot will turn in the shortest direction to the specified heading.
// If you see `Math.PI`, it is already in radians, and does not need `Math.toRadians()`. Degrees from 0 to 360 need to be converted to radians.
// To turn clockwise, use a negative angle.

.turn(-Math.PI / 6) // Turns clockwise by `Math.PI / 6` degrees, ending at a heading of 0 degrees
.turn(Math.PI / 6) // Turns counterclockwise by `Math.PI / 6` degrees, ending at the original heading
```

---

#### `turnTo(Math.toRadians(double: heading))`

```java
// Robot turns counterclockwise to the specified angle
// This turn is in radians, so you must convert your degrees to radians using `Math.toRadians()`
// By default, the robot will turn in the shortest direction to the specified heading.
// To turn in the opposite direction, you can add or subtract a very small number (1e-6) to the heading you want to turn to.
// If it still does not work, you can use the `turn()` method instead.

.turnTo(Math.toRadians(90)) // Turns to a heading of 90 degrees
.turnTo(Math.PI / 6) // Turns to a heading of `Math.PI / 6` degrees, ending at the original heading
```

---

#### `setTangent(double: r)`

```java
// `setTangent()` allows you to set a heading tangent on a trajectory, allowing you to follow a trajectory at arbitrary heading tangents
// This is equivalent to specifying a custom tangent in the `TrajectoryBuilder()` constructor

.setTangent(0) // Sets tangent to 0
```

---

#### `setReversed(boolean: reversed)`

```java
// If you see these hooks on the start and/or end of spline trajectories, you can use `setReversed()` to fix them
// By default, each trajectory is set to `setReversed(false)`. 

.setReversed(false) // Unreversed trajectory has hooks on the start and end
.splineTo(new Vector2d(-24, 24), Math.PI / 2)

```

```java
.setReversed(true) // Reversed trajectory has no hooks on the start and end
.splineTo(new Vector2d(-24, 24), Math.PI / 2)
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

#### `.strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
// Robot moves to the specified coordinates while linearly interpolating between the start heading and a specified end heading
// In other words, it constantly turns to a certain heading (once more, in radians) while moving to the specified coordinates. 

.strafeToLinearHeading(new Vector2d(36, 36), Math.toRadians(90))
```

---

#### `.strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
// Robot moves to the specified coordinates while splinely interpolating between the start heading and a specified end heading
// In other words, it constantly turns to a certain heading (once more, in radians) while moving to the specified coordinates. 

.strafeToSplineHeading(new Vector2d(36, 36), Math.toRadians(90))
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