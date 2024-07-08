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

#### [Path Primitives:](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#path-primitives-1)
1. [`waitSeconds(double: seconds)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#waitsecondsdouble-seconds)
2. [`turn(Math.toRadians(double: angle))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#turnmathtoradiansdouble-angle)
3. [`turnTo(Math.toRadians(double: heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#turntomathtoradiansdouble-heading)
4. [`setTangent(double: r)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#settangentdouble-r)
5. [`setReversed(boolean: reversed)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#setreversedboolean-reversed)
6. [`strafeTo(new Vector2d(double: x, double: y))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
7. [`strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetolinearheadingnew-vector2dx-y-mathtoradiansheading)
8. [`strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetosplineheadingnew-vector2dx-y-mathtoradiansheading)
9. [`lineToX(x: double)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linetoxx-double--linetoxconstantheadingx-double)
10. [`lineToY(y: double)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linetoyy-double--linetoyconstantheadingy-double)
11. [`splineTo(new Vector2d(x, y), tangent)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#splinetonew-vector2dx-y-tangent)

#### [Heading Primitives:](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#heading-primitives-1)
12. [`Tangent Heading (default)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#tangent-heading-default)
13. [`Constant Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#constant-heading)
14. [`Linear Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linear-heading)
15. [`Spline Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#spline-heading)

### Path Primitives

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{6}$.

#### `waitSeconds(double: seconds)`

> 🚨 **WARNING:** 🚨  
> Ensure that you are using `waitSeconds()` and not `wait()`. All Java objects have a `wait()` function which causes the current thread to wait until another thread invokes a `notify()` or `notifyAll()` method. See further details in the [Oracle JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#wait()). We don't care for this function but it does show up in intellisense. Make sure you are using the `waitSeconds()` function instead of `wait()`.

```java
{{#rustdoc_include BuilderReference.java:1:4}}
```

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

</style>

<div class="video-container">
  <iframe width="505" height="650" src="https://www.youtube.com/embed/JuYdXikOhzM?rel=0&modestbranding=1" title="waitSeconds()" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

#### `turn(Math.toRadians(double: angle))`

```java
{{#rustdoc_include BuilderReference.java:8:14}}
```

<style>
    .video-container {
      display: flex;
      justify-content: center;
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
      max-width: 100%;
      background: #000;
      margin-bottom: 20px;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
</style>

<div class="video-container">
  <iframe width="505" height="650" src="https://www.youtube.com/embed/tTfQ6Diz_GQ?rel=0&modestbranding=1" title="turn()" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
</div>

---

#### `turnTo(Math.toRadians(double: heading))`

```java
{{#rustdoc_include BuilderReference.java:18:25}}
```

<style>
  .video-container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="video-container">
  <iframe width="505" height="650" src="https://www.youtube.com/embed/eRQwtMEw4io?rel=0&modestbranding=1" title="turnTo()" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
{{#rustdoc_include BuilderReference.java:57:60}}
```

---

#### `.strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
{{#rustdoc_include BuilderReference.java:64:67}}
```

> **What is the difference between spline interpolation and linear interpolation?**
> - Interpolation is a method of finding new data points (angle heading) in between two given data points (initial heading and final heading).
> - Linear interpolation means that the robot interpolates its heading and turns at a constant, linear rate, from start to the end of the trajectory.
> - Spline interpolation is the opposite, as the robot turns at a non-linear rate.

---

#### `lineToX(x: double)` & `.lineToXConstantHeading(x: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:71:76}}
```

---

#### `lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

> 🚨 **WARNING:** 🚨  
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:80:85}}
```

---

#### `splineTo(new Vector2d(x, y), tangent)`

```java
{{#rustdoc_include BuilderReference.java:89:91}}
```

---

### Heading Primitives

The begin pose is the origin (0,0) with a heading of $\frac{\pi}{2}$.

#### `Tangent Heading (default)`

```java
{{#rustdoc_include BuilderReference.java:95:98}}
```

---

#### `Constant Heading`

```java
{{#rustdoc_include BuilderReference.java:102:107}}
```

---

#### `Linear Heading`

```java
{{#rustdoc_include BuilderReference.java:111:115}}
```

---

#### `Spline Heading`

```java
{{#rustdoc_include BuilderReference.java:119:123}}
```

---

## Resources

- [Official Road Runner 1.0 Builder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/)
- [Official Road Runner 1.0 Builder Playground](https://rr.brott.dev/playground/)
- [`waitSeconds()` Video Playground](https://rr.brott.dev/playground/?367582b88299b654)
- [`turn()` Video Playground](https://rr.brott.dev/playground/?5a434271b239e5bc )
- [`turnTo()` Video Playground](https://rr.brott.dev/playground/?ad40438ae13740f7)
- [`strafeTo()` / `strafeToConstantHeading()` Video Playground](https://rr.brott.dev/playground/?f49042fdf5ea3ab0)
- [`.strafeToLinearHeading()` Video Playground](https://rr.brott.dev/playground/?ed5d41566d46b59f)

---
*Last Updated: 2024-07-02*

