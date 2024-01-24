# Robot Drifts While Tuning Follower PID

### Check Localization
Run `LocalizationTest` and drive the robot back and forth a few times. You want to ensure that the behavior shown on the dashboard mirrors that of what you can see. If the robot was veering in `BackAndForth`, see if the dashboard bot is veering the same. If you notice the same discrepancy while doing running localization test, it means the problem is in your localization.

### Tuning PID
If you're certain that localization works fine and the robot "knows" that it's wrong, but isn't correcting, then you need to tune your PID values more.
You can tune your controller through the steps on [this page of Game Manual 0](https://gm0.org/en/latest/docs/software/concepts/control-loops.html#tuning-a-pid-loop).