# Complete TrajectoryBuilder Reference

### Ingredients

1. A fully tuned [Road Runner 1.0](https://rr.brott.dev/docs/) setup _**or**_ [MeepMeep for Road Runner 1.0](https://github.com/acmerobotics/MeepMeep)

### The Problem

The current [TrajectoryBuilder Reference](https://rr.brott.dev/docs/v1-0/builder-ref/) in the official [Road Runner 1.0](https://rr.brott.dev/docs/) docs only has a few TrajectoryBuilder methods, and does  not explain them very well in depth. This is a complete reference for more methods in the TrajectoryBuilder class for [Road Runner 1.0](https://rr.brott.dev/docs/).

---

## TrajectoryBuilder Reference

### Table of Contents

#### [Path Primitives:](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#path-primitives-1)
1. [`waitSeconds(double: seconds)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#waitsecondsdouble-seconds)
2. [`turn(Math.toRadians(double: angle))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#turnmathtoradiansdouble-angle)
3. [`turnTo(Math.toRadians(double: heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#turntomathtoradiansdouble-heading)
4. [`setTangent(double: r)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#settangentdouble-r)
5. [`setReversed(boolean: reversed)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#setreversedboolean-reversed)
6. [`.strafeTo(new Vector2d(double: x, double: y))` & `.strafeToConstantHeading(new Vector2d(x: double, y: double))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetonew-vector2ddouble-x-double-y--strafetoconstantheadingnew-vector2dx-double-y-double)
7. [`strafeToLinearHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetolinearheadingnew-vector2dx-y-mathtoradiansheading)
8. [`strafeToSplineHeading(new Vector2d(x, y), Math.toRadians(heading))`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#strafetosplineheadingnew-vector2dx-y-mathtoradiansheading)
9. [`lineToX(x: double) & .lineToXConstantHeading(x: double)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linetoxx-double--linetoxconstantheadingx-double)
10. [`lineToY(y: double) & .lineToYConstantHeading(y: double)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linetoyy-double--linetoyconstantheadingy-double)
11. [`splineTo(new Vector2d(x, y), tangent)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#splinetonew-vector2dx-y-tangent--heading-is--fracpi6-)
    
#### [Heading Primitives:](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#heading-primitives-1)
12. [`Tangent Heading (default)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#tangent-heading-default)
13. [`Constant Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#constant-heading)
14. [`Linear Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#linear-heading)
15. [`Spline Heading`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#spline-heading)

### Path Primitives

The begin pose is the origin `(0,0)` with a heading of \\( \frac{\pi}{6} \\), with the exception of [`splineTo(new Vector2d(x, y), tangent)`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html#splinetonew-vector2dx-y-tangent--heading-is--fracpi6-), which has a heading of \\( \frac{\pi}{2} \\).


#### `waitSeconds(double: seconds)`

> 🚨 **WARNING:** 🚨  
> Ensure that you are using `waitSeconds()` and not `wait()`. All Java objects have a `wait()` function which causes the current thread to wait until another thread invokes a `notify()` or `notifyAll()` method. See further details in the [Oracle JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#wait()). We don't care for this function but it does show up in intellisense. Make sure you are using the `waitSeconds()` function instead of `wait()`.

```java
{{#rustdoc_include BuilderReference.java:1:4}}
```

<div class="video-container-1">
    <iframe width="505" height="650" 
        src="https://rr-playground-server.brott.dev/bcce1244-e518-4034-a384-6072fa7a491d.mp4?autoplay=0" title="waitSeconds()" style="border: none;" >
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

#### `turn(Math.toRadians(double: angle))`

```java
{{#rustdoc_include BuilderReference.java:8:14}}
```

<div class="video-container-2">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/ac38839f-39aa-4b0e-ba6c-19f36e3b9bbe.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
> You may have noticed that we are turning by \\( \frac{\pi}{6} \\) degrees instead of degrees. 
> This is because Road Runner 1.0's units are inches and radians by default. To use degrees, we can convert degrees to radians by using Java's `Math.toRadians(degrees)`
> 
> Example:
> `Math.toRadians(90)` converts 90 degrees to radians. 90 degrees is the same as \\( \frac{\pi}{2} \\) radians.

---

#### `turnTo(Math.toRadians(double: heading))`

```java
{{#rustdoc_include BuilderReference.java:18:25}}
```

<div class = "video-container-3">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/7f7f2cc9-155d-483d-a88b-7f2d66741aaa.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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

---

#### `setReversed(boolean: reversed)`

```java
{{#rustdoc_include BuilderReference.java:36:43}}
```

<div class = "video-container-4">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/5e27c06d-330b-42a8-9ce5-d2c5a3cbaf69.mp4" title="waitSeconds()" style="border: none;">
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
        src="https://rr-playground-server.brott.dev/66e8f52f-8480-4372-bcaa-ee7313a1d637.mp4" title="waitSeconds()" style="border: none;">
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
        src="https://rr-playground-server.brott.dev/d06624a8-a8fc-4e0f-8864-8b8768c68f8e.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
        src="https://rr-playground-server.brott.dev/9504527a-6003-46a0-888a-07a4ea487341.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
        src="https://rr-playground-server.brott.dev/6ef27e52-edf0-4501-adeb-8d40b4163bac.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:90:95}}
```

<div class = "video-container-9">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/658b0f0b-9bce-44c1-af96-6fa34597d1e4.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
> It is **HIGHLY RECOMMENDED** to use [`.strafeTo()`](https://arushyadlapati.github.io/cookbook/roadrunner_10/complete_trajectorybuilder_reference.html) instead of any `lineTo()`'s! 🚨

```java
{{#rustdoc_include BuilderReference.java:99:104}}
```

<div class = "video-container-13">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/4929bf3f-74f5-45d8-bd1d-244c9ffaaa0d.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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

#### `splineTo(new Vector2d(x, y), tangent)` | Heading is \\( \frac{\pi}{6} \\)

```java
{{#rustdoc_include BuilderReference.java:108:110}}
```

<div class = "video-container-11">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/6dd76045-92f2-454b-b853-89635c6e9635.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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

The begin pose is the origin `(0,0)` with a heading of \\( \frac{\pi}{2} \\).

#### `Tangent Heading (default)`

```java
{{#rustdoc_include BuilderReference.java:114:117}}
```

<div class = "video-container-12">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/22fefc44-44cb-42dd-bac5-1384cfa2d35d.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
        src="https://rr-playground-server.brott.dev/05d9298e-6737-4a08-9374-dd09725d1a2d.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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

<div class = "video-container-14">
    <iframe width="505" height="650"
        src="https://rr-playground-server.brott.dev/d8b9fdef-59c9-415b-86fb-a68616f34bb0.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
    </iframe>
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
        src="https://rr-playground-server.brott.dev/05d9298e-6737-4a08-9374-dd09725d1a2d.mp4?autoplay=0" title="waitSeconds()" style="border: none;">
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
*Last Updated: 2024-07-29*