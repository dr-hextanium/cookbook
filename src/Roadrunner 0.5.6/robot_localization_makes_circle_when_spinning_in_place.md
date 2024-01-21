# Robot Localization Makes Circle When Spinning In Place

So when you spin the robot in place the drawing on dashboard is making a circle. This is normal and can be fixed.

### What causes it?
When the robot is spun, the strafing tracking wheel moves, which makes the localization think the robot moved in a circle. This can be counteracted with math (which RR luckily has) by figuring out the forward distance from the strafing tracking wheel to the center of rotation.

### 3 Wheel Solution
For 3 wheel odometry, this means your forward offset isn't tuned correctly. Run the tuner and replace the value. If that doesn't work, check whether the strafing pod is closer to the front or the back of the robot. If it's closer to the back, the offset should be negative.

### 2 Wheel Solution
The solution for 2 wheel odometry is largely the same. Instead of being called forward offset, it is the x and y position of the strafing pod. The same advice about positive and negative still applies.