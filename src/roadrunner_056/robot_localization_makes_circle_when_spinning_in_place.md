# Robot Localization Makes Circle When Spinning In Place

So when you spin the robot in place, the drawing on FTC Dashboard is making a circle. 
This is normal and can be fixed.

### What causes it?
When the robot is spun, the strafing odometry wheel moves which makes the localization think the robot moved in a circle. 
This can be counteracted using the forward distance from the strafing tracking wheel to the center of rotation.

### Three Wheel Solution
For three wheel odometry, this means your forward offset isn't tuned correctly. 
Run the tuner and replace the value. 
If that doesn't work, check whether the strafing pod is closer to the front or the back of the robot. 
If it's closer to the back, the offset should be negative.

### Two Wheel Solution
The solution for two wheel odometry is largely the same. 
Instead of the forward offset, you must tune the x and y position of the strafing pod. 
The same advice about positive and negative offset still applies.

*Last Updated: 2024-05-30*