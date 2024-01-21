# Robot Drifts While Tuning Follower PID

### Check Localization
Run localization test and drive the robot back and forth a few times. Check if the robot pose being drawn on dashboard matches real life. You mostly want to be looking out for whatever way it's drifting. If it was veering in back and forth see if the drawn bot is veering; if it was shifted left, look for that. If you notice the same discrepancy while doing running localization test, it means the problem is in your localization.

### Tuning PID
If you're certain that localization works fine and the robot "knows" that it's wrong, but isn't correcting, then you need to tune your PID values more. This typically means increasing the proportional gain (kp) until it stays on track. You almost never need kd (unless you are using feedforward, then you may need some translational kd) or ki.