# Syncing Two Linear Slide Motors Using a PIDF Controller

### Ingredients

1. A PID(F) controller
2. Tuned PID(F) coefficients

## The Recipe

### The Problem

Linear slides powered by two different motors can end up twisted, with one slide higher than the other. 
This can happen if the two encoders get out of sync. 
If you are using the RUN_TO_POSITION motor mode, this causes one slide to be supplied more power than the other. 
Even if you are using a custom PID(F) controller on each motor, the same problem would occur.

### Methodology

**The BEST way to keep these in sync is to have them be mechanically connected with a bar or a piece of channel. 
If the two act as one rigid body, then it is a lot less dependent on software. 
However, this is not always possible, hence the software solutions.**

Instead, the way this recipe will explain is with a leader and a follower linear slide motor. 
This means we will use a PID(F) controller on one of the linear slide positions and just set that power to both motors. 
This resolves the issue of the two linear slides being supplied different powers.
If both motors are going the same speed and both linear slides are well tensioned, the linear slides should stay synced.

### Code Example

This code example is going to assume you have a working PID(F) controller class and tuned coefficients.

```java
{{#rustdoc_include PIDFExample.java:3:29}}
```
