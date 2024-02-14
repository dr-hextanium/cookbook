# Where should I put my odometry pods?

### Ingredients


1. An Expansion Hub or Control Hub
2. either 2 or 3 odometry pods/modules
     
## The Recipe

### The problem
The Rev Control Hub and Expansion hub, as found [here](https://blog.eeshwark.com/robotblog/rev-hub-quadrature) by 7244 alum Eeshwar, only has 2 reliable quadrature encoder ports, meaning for teams that use high CPR/PPR encoders, such as the Rev Through Bore encoder, will miss counts on ports 1 and 2.


### Solutions
### 2 Wheel Odometry
For teams that use a 2 wheel + IMU setup, the solution is simple! AS you don't need drive encoders, put all motors on the main hub and put the odometry encoders on encoder ports 0 and 3 main hub, where you would usually put the motor encoders.

### 3 Wheel Odometry
For teams with 3 wheel odometry, it gets much more complex. Since the most important encoders are the parallel pods, since encoder drift with them will cause heading drift, causing significant localization error across a 30 second autonomous. Since they're the most important, the parallel pods should go in ports 0 and 3 on your main hub. The perpendicular, or strafe pod, is less important to localization, and since mecanum strafe speed is lower, so it is fine to put it in port 1 or 2, as the accuracy loss of using the secondary hub, due to requiring another bulk read, is not worth the increase of a more accurate port.




*Last Updated: 2024-02-08*