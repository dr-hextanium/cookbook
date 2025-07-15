# Robot Drive Full Speed on Start When Following Trajectory

If you are running an OpMode that has Roadrunner trajectories in it, and when you start moving it goes at full speed right away, this almost always means you forgot to set a pose estimate.
In `init()`, before you run any trajectories, make sure you have `drive.setPoseEstimate(startingPose)`, whatever your starting pose may be.
Make sure that the trajectory starting pose matches this:
```java
Trajectory traj = drive.trajectoryBuilder(startingPose)
    ...
    .build();
```
