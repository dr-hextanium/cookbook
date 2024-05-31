# Where to put your odometry pods

### Ingredients


1. An Expansion Hub or Control Hub
2. either 2 or 3 odometry pods/modules
     
## The Recipe

### The problem
The Rev Control Hub and Expansion Hub, as found [here](https://blog.eeshwark.com/robotblog/rev-hub-quadrature) by 7244 alum Eeshwar, only have 2 reliable quadrature encoder ports. 
This means high CPR/PPR encoders such as the Rev Through Bore encoder will miss counts on ports 1 and 2 which will lead to drift.


### Solutions
### 2 Wheel Odometry
For teams that use a 2 wheel + IMU setup, the solution is simple! 
Put the drive motors on the Control Hub. 
Then, as you don't need drive encoders, you can simply put the odometry on Control Hub encoder ports 0 and 3 where you would usually put the motor encoders.

### 3 Wheel Odometry
For teams with 3 wheel odometry, it is a bit more complex. 
The most important odometry pods are the parallel ones since encoder drift with them will cause heading drift.
This can rapidly ruin your localization as heading is used as a basis for all other measurements. 
Since they're the most important, the parallel pods should go in ports 0 and 3 on the Control Hub. 
The perpendicular (strafe) pod is less important to localization, so it is fine to put it in port 1 or 2 on the Control Hub.

Note that you should always put odometry on the Control Hub (or at least all on the same hub) even if you must place it in ports 1 or 2.
This is because reading from the Expansion Hub requires an additional bulk read.
This can greatly worsen loop times and is not worth the benefits of using the 0 and 3 ports.




*Last Updated: 2024-05-29*