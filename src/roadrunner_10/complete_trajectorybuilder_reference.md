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

#### [Path Primitives:](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#path-primitives-1)
1. [`waitSeconds(double: seconds)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#waitsecondsdouble-seconds)
2. [`turn(Math.toRadians(double: angle))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#turnmathtoradiansdouble-angle)
3. [`turnTo(Math.toRadians(double: heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#turntomathtoradiansdouble-heading)
4. [`setTangent(double: r)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetosplineheadingnew-vector2dx-y-mathtoradiansheading)
5. [`setReversed(boolean: reversed)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#setreversedboolean-reversed)
6. [`strafeTo(new Vector2d(double: x, double: y))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
7. [`strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetolinearheadingnew-vector2dx-y-mathtoradiansheading)
8. [`strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetosplineheadingnew-vector2dx-y-mathtoradiansheading)
9. [`lineToX(x: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoxx-double--linetoxconstantheadingx-double)
10. [`lineToY(y: double)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linetoyy-double--linetoyconstantheadingy-double)
11. [`splineTo(new Vector2d(x, y), tangent)`]()

#### [Heading Primitives:](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#heading-primitives-1)
12. [`Tangent Heading (default)`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#tangent-heading-default)
13. [`Constant Heading`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#constant-heading)
14. [`Linear Heading`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#linear-heading)
15. [`Spline Heading`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#spline-heading)

### Path Primitives

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{6}$.

#### `waitSeconds(double: seconds)`

> 🚨 **WARNING:** 🚨  
> Ensure that you are using `waitSeconds()` and not `wait()`. All Java objects have a `wait()` function which causes the current thread to wait until another thread invokes a `notify()` or `notifyAll()` method. See further details in the [Oracle JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#wait()). We don't care for this function but it does show up in intellisense. Make sure you are using the `waitSeconds()` function instead of `wait()`.

```java
{{#rustdoc_include BuilderReference.java:1:4}}
```

---

#### `turn(Math.toRadians(double: angle))`

```java
{{#rustdoc_include BuilderReference.java:8:14}}
```

<video width="320" height="240" controls>
  <source src="https://rr-playground-server.brott.dev/87cc4fcf-da46-4cda-a55e-77ddb90039f1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


---

#### `turnTo(Math.toRadians(double: heading))`

```java
{{#rustdoc_include BuilderReference.java:18:25}}
```

---

#### `setTangent(double: r)`

```java
{{#rustdoc_include BuilderReference.java:29:32}}
```

---

#### `setReversed(boolean: reversed)`

```java
{{#rustdoc_include BuilderReference.java:36:41}}
```

```java
{{#rustdoc_include BuilderReference.java:43:44}}
```

---

#### `.strafeTo(new Vector2d(double: x, double: y))` & `.strafeToConstantHeading(new Vector2d(x: double, y: double))`

```java
{{#rustdoc_include BuilderReference.java:48:53}}
```

---

#### `.strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
{{#rustdoc_include BuilderReference.java:57:60}
```

---

#### `.strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
{{#rustdoc_include BuilderReference.java:64:67}
```

> **What is the difference between spline interpolation and linear interpolation?** 
> - Interpolation is a method of finding new data points (angle heading) in between two given data points (initial heading and final heading).
> - Linear interpolation means that the robot interpolates its heading and turns at a constant, linear rate, from start to the end of the trajectory.
> - Spline interpolation is the opposite, as the robot turns at a non-linear rate.

---

#### `lineToX(x: double)` & `.lineToXConstantHeading(x: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double) instead of any `lineTo()`'s! 🚨 

```java
{{#rustdoc_include BuilderReference.java:71:76}
```

---

#### `lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://github.com/ArushYadlapati/cookbook/blob/main/src/roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:80:85}
```

---

#### `splineTo(new Vector2d(x, y), tangent)`

```java
{{#rustdoc_include BuilderReference.java:89:91}
```

---

### Heading Primitives

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{2}$.

#### `Tangent Heading (default)`

```java
{{#rustdoc_include BuilderReference.java:95:98}
```

---

#### `Constant Heading`

```java
{{#rustdoc_include BuilderReference.java:102:107}
```

---

#### `Linear Heading`

```java
{{#rustdoc_include BuilderReference.java:111:115}
```

---

#### `Spline Heading`

```java
{{#rustdoc_include BuilderReference.java:119:123}
```

---

*Last Updated: 2024-07-02*


