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
// hi
.lineToX(48)
.lineToXConstantHeading(48)
```

`lineToY(y: double)` & `.lineToYConstantHeading(y: double)`

```java
.lineToY(48)
.lineToYConstantHeading(48)
```


*Last Updated: 2024-07-02*
