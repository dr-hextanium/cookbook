# Robot Makes Circle When Spinning In Place

### What causes it?
When the robot is spun, the strafing tracking wheel does move in a circle, but this can be counteracted with math (which RR luckily has).

### 3 Wheel Solution
For 3 wheel odometry, this means your forward offset isn't tuned correctly. Run the tuner and replace the value. If that doesn't work, check whether the strafing pod is closer to the front or the back of the robot. If it's closer to the back, the offset should be negative.

### 2 Wheel Solution
The solution for 2 wheel odometry is largely the same. Instead of being called forward offset, it is the x and y position of the strafing pod. The same advice about positive and negative still applies.