# Robot Drive Full Speed on Start When Following Trajectory

If you are running an op mode that has roadrunner trajectories in it, and when you start moving it goes at full speed right away, this almost always means you forgot to set a pose estimate. In `init()` before you run any trajectories, make sure you have `sampleMecanumDrive.setPoseEstimate(startingPose)`, whatever your starting pose may be. Also make sure that the trajectory starting pose matches this. Like
```
Trajectory traj = sampleMecanumDrive.trajectoryBuilder(startingPose)
    ...
    .build();
```

*Last Updated: 2024-01-20*