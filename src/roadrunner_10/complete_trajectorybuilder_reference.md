# Complete TrajectoryBuilder Reference

### Ingredients

1. A fully tuned [Road Runner 1.0](https://rr.brott.dev/docs/) setup _**or**_ [MeepMeep for Road Runner 1.0](https://github.com/acmerobotics/MeepMeep)

### The Problem

The current [TrajectoryBuilder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/) in the official [Road Runner 1.0](https://rr.brott.dev/docs/) docs only has a few TrajectoryBuilder methods, and does  not explain them very well in depth. This is a complete reference for more methods in the TrajectoryBuilder class for [Road Runner 1.0](https://rr.brott.dev/docs/).

---

## TrajectoryBuilder Reference

### Table of Contents

#### [Path Primitives:](../roadrunner_10/complete_trajectorybuilder_reference.md#path-primitives-1)
1. [`waitSeconds(double: seconds)`](../roadrunner_10/complete_trajectorybuilder_reference.md#waitsecondsdouble-seconds)
2. [`turn(Math.toRadians(double: degrees))`](../roadrunner_10/complete_trajectorybuilder_reference.md#turnmathtoradiansdouble-degrees)
3. [`turnTo(Math.toRadians(double: degrees))`](../roadrunner_10/complete_trajectorybuilder_reference.md#turntomathtoradiansdouble-degrees)
4. [`setTangent(double: r)`](../roadrunner_10/complete_trajectorybuilder_reference.md#settangentdouble-r)
5. [`setReversed(boolean: reversed)`](../roadrunner_10/complete_trajectorybuilder_reference.md#setreversedboolean-reversed)
6. [`.strafeTo(new Vector2d(double: x, double: y))` & `.strafeToConstantHeading(new Vector2d(x: double, y: double))`](../roadrunner_10/complete_trajectorybuilder_reference.md#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
7. [`strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`](../roadrunner_10/complete_trajectorybuilder_reference.md#strafetolinearheadingnew-vector2dx-y-mathtoradiansheading)
8. [`strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`](../roadrunner_10/complete_trajectorybuilder_reference.md#strafetosplineheadingnew-vector2dx-y-mathtoradiansheading)
9. [`lineToX(x: double) & .lineToXConstantHeading(x: double)`](../roadrunner_10/complete_trajectorybuilder_reference.md#linetoxx-double--linetoxconstantheadingx-double)
10. [`lineToY(y: double) & .lineToYConstantHeading(y: double)`](../roadrunner_10/complete_trajectorybuilder_reference.md#linetoyy-double--linetoyconstantheadingy-double)
11. [`splineTo(new Vector2d(x, y), tangent)`](../roadrunner_10/complete_trajectorybuilder_reference.md#splinetonew-vector2dx-y-tangent--start-heading-is--fracpi2--radians)

#### [Heading Primitives:](../roadrunner_10/complete_trajectorybuilder_reference.md#heading-primitives-1)
12. [`Tangent Heading (default)`](../roadrunner_10/complete_trajectorybuilder_reference.md#tangent-heading-default)
13. [`Constant Heading`](../roadrunner_10/complete_trajectorybuilder_reference.md#constant-heading)
14. [`Linear Heading`](../roadrunner_10/complete_trajectorybuilder_reference.md#linear-heading)
15. [`Spline Heading`](../roadrunner_10/complete_trajectorybuilder_reference.md#spline-heading)

### Path Primitives

The begin pose is the origin `(0,0)` with a heading of \\( \frac{\pi}{6} \\) radians, with the exception of [`splineTo(new Vector2d(x, y), tangent)`](../roadrunner_10/complete_trajectorybuilder_reference.md#splinetonew-vector2dx-y-tangent--start-heading-is--fracpi2--radians), which has a heading of \\( \frac{\pi}{2} \\).


#### `waitSeconds(double: seconds)`

> 🚨 **WARNING:** 🚨
> Ensure that you are using `waitSeconds()` and not `wait()`. All Java objects have a `wait()` function which causes the current thread to wait until another thread invokes a `notify()` or `notifyAll()` method. See further details in the [Oracle JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#wait()). We don't care for this function, but it does show up in intellisense. Make sure you are using the `waitSeconds()` function instead of `wait()`.

```java
{{#rustdoc_include BuilderReference.java:1:4}}
```
<div class="video-container-1">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/waitSeconds().mp4" title="waitSeconds()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-1 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-1 {
        width: 328px;
        height: 423px;
    }

    .video-container-1 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>
---

#### `turn(Math.toRadians(double: degrees))`

```java
{{#rustdoc_include BuilderReference.java:8:14}}
```

<div class="video-container-2">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/turn().mp4" title="turn()" style="border: none;" playsinline controls>>
    </iframe>
</div>

<style>
.video-container-2 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-2 {
        width: 328px;
        height: 423px;
    }

    .video-container-2 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

> **Why Radians?**
> You may have noticed that we are turning by \\( \frac{\pi}{6} \\) radians instead of 30 degrees.
> This is because Road Runner 1.0's units are inches and radians by default. To use degrees, we can convert degrees to radians by using Java's `Math.toRadians(degrees)`
>
> Example:
> `Math.toRadians(90)` converts 90 degrees to radians. 90 degrees is the same as \\( \frac{\pi}{2} \\) radians.

---

#### `turnTo(Math.toRadians(double: degrees))`

```java
{{#rustdoc_include BuilderReference.java:18:25}}
```

<div class = "video-container-3">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/turnTo().mp4" title="turnTo()" style="border: none;" >
    </iframe>
</div>

<style>
.video-container-3 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-3 {
        width: 328px;
        height: 423px;
    }

    .video-container-3 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `setTangent(double: r)`

```java
{{#rustdoc_include BuilderReference.java:29:32}}
```
>**Tip!**
>
>You can learn more about tangents in RoadRunner [here](https://rr.brott.dev/docs/v1-0/guides/tangents/).

---

#### `setReversed(boolean: reversed)`

```java
{{#rustdoc_include BuilderReference.java:36:43}}
```

<div class = "video-container-4">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/setReversed(false).mp4" title="setReversed(false)" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-4 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-4 {
        width: 328px;
        height: 423px;
    }

    .video-container-4 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

```java
{{#rustdoc_include BuilderReference.java:47:50}}
```

<div class = "video-container-5">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/setReversed(true).mp4" title="setReversed(true)" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-5 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-5 {
        width: 328px;
        height: 423px;
    }

    .video-container-5 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

```java
{{#rustdoc_include BuilderReference.java:54:63}}
```

---

#### `.strafeTo(new Vector2d(double: x, double: y))` & `.strafeToConstantHeading(new Vector2d(x: double, y: double))`

```java
{{#rustdoc_include BuilderReference.java:67:72}}
```

<div class = "video-container-6">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/strafeTo().mp4" title="strafeTo()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-6 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-6 {
        width: 328px;
        height: 423px;
    }

    .video-container-6 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `.strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
{{#rustdoc_include BuilderReference.java:76:79}}
```

<div class = "video-container-7">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/strafeToLinearHeading().mp4" title="strafeToLinearHeading()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-7 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-7 {
        width: 328px;
        height: 423px;
    }

    .video-container-7 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `.strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`

```java
{{#rustdoc_include BuilderReference.java:83:86}}
```

<div class = "video-container-8">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/strafeToSplineHeading().mp4" title="strafeToSplineHeading()" style="border: none;" >
    </iframe>
</div>

<style>
.video-container-8 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-8 {
        width: 328px;
        height: 423px;
    }

    .video-container-8 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

> **What is the difference between spline interpolation and linear interpolation?**
> - Interpolation is a method of finding new data points (angle heading) in between two given data points (initial heading and final heading).
> - Linear interpolation means that the robot interpolates its heading and turns at a constant, linear rate, from start to the end of the trajectory.
> - Spline interpolation is the opposite, as the robot turns at a non-linear rate.

---

#### `lineToX(x: double)` & `.lineToXConstantHeading(x: double)`

> 🚨 **WARNING:** 🚨
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](../roadrunner_10/complete_trajectorybuilder_reference.md) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:90:95}}
```

<div class = "video-container-9">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/lineToX().mp4" title="lineToX()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-9 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-9 {
        width: 328px;
        height: 423px;
    }

    .video-container-9 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

> 🚨 **WARNING:** 🚨
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](../roadrunner_10/complete_trajectorybuilder_reference.md) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:99:104}}
```

<div class = "video-container-10">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/lineToY().mp4" title="lineToY()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-10 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-10 {
        width: 328px;
        height: 423px;
    }

    .video-container-10 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `splineTo(new Vector2d(x, y), tangent)` | Start heading is \\( \frac{\pi}{2} \\) radians

```java
{{#rustdoc_include BuilderReference.java:108:110}}
```

<div class = "video-container-11">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/splineTo().mp4" title="splineTo()" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-11 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-11 {
        width: 328px;
        height: 423px;
    }

    .video-container-11 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

### Heading Primitives

The begin pose is the origin `(0,0)` with a heading of \\( \frac{\pi}{2} \\) radians.

#### `Tangent Heading (default)`

```java
{{#rustdoc_include BuilderReference.java:114:117}}
```

<div class = "video-container-12">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/splineTo()%20(default).mp4" title="splineTo() (default)" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-12 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-12 {
        width: 328px;
        height: 423px;
    }

    .video-container-12 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `Constant Heading`

```java
{{#rustdoc_include BuilderReference.java:121:126}}
```

<div class = "video-container-13">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/splineToConstantHeading().mp4" title="splineToConstantHeading() (default)" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-13 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-13 {
        width: 328px;
        height: 423px;
    }

    .video-container-13 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `Linear Heading`

```java
{{#rustdoc_include BuilderReference.java:130:134}}
```

<div class="video-container-1">
    <video width="505" height="650"
        src="../static/builder_reference_videos/splineToLinearHeading().mp4" title="splineToLinearHeading()" style="border: none;" playsinline controls>
    </video>
</div>

<style>
.video-container-14 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-14 {
        width: 328px;
        height: 423px;
    }

    .video-container-14 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

#### `Spline Heading`

```java
{{#rustdoc_include BuilderReference.java:138:142}}
```

<div class = "video-container-15">
    <iframe width="505" height="650"
        src="../static/builder_reference_videos/splineToSplineHeading().mp4" title="splineToSplineHeading() (default)" style="border: none;" playsinline controls>
    </iframe>
</div>

<style>
.video-container-15 {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .video-container-15 {
        width: 328px;
        height: 423px;
    }

    .video-container-15 iframe {
        width: 328px;
        height: 423px;
    }
}
</style>

---

## Resources

- [Official Road Runner 1.0 Builder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/)
- [Official Road Runner 1.0 Builder Playground](https://rr.brott.dev/playground/)
- [`waitSeconds()` Video Playground](https://rr.brott.dev/playground/?367582b88299b654)
- [`turn()` Video Playground](https://rr.brott.dev/playground/?5a434271b239e5bc )
- [`turnTo()` Video Playground](https://rr.brott.dev/playground/?ad40438ae13740f7)
- [`.setReversed(false)` Video Playground](https://rr.brott.dev/playground/?78c18fcfaa629ea1)
- [`.setReversed(true)` Video Playground](https://rr.brott.dev/playground/?f13b09a93d37031c)
- [`strafeTo()` / `strafeToConstantHeading()` Video Playground](https://rr.brott.dev/playground/?f49042fdf5ea3ab0)
- [`.strafeToLinearHeading()` Video Playground](https://rr.brott.dev/playground/?ed5d41566d46b59f)
- [`.strafeToSplineHeading()` Video Playground](https://rr.brott.dev/playground/?2df122402fceaecc)
- [`.lineToX()` Video Playground](https://rr.brott.dev/playground/?24fae2ad24c95f39)
- [`.lineToY()` Video Playground](https://rr.brott.dev/playground/?539e8ead2f501b29)
- [`.splineTo()` Video Playground](https://rr.brott.dev/playground/?0a660e7b5fae2b70d)
- [`.splineTo() (default)` Video Playground](https://rr.brott.dev/playground/?728d3c0e2e969023)
- [`.splineToConstantHeading()` Video Playground](https://rr.brott.dev/playground/?31ac47a09d8222c7)
- [`.splineToLinearHeading()` Video Playground](https://rr.brott.dev/playground/?b152980ce38bbdaa)
- [`.splineToSplineHeading()` Video Playground](https://rr.brott.dev/playground/?9c422405d44fed70)

---
