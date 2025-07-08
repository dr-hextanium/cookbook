# Null list error in Road Runner 1.0

### Ingredients

1. A Road Runner 1.0 setup
2. Completed ForwardPushTest and LateralPushTest


## The Recipe

### The problem

If you have gotten through Road Runner 1.0 tuning to the ForwardRampLogger tuning step (you may also see this in LateralRampLogger or AngularRampLogger), sometimes you will get an empty list error when you press the "latest" button.

### Solution
You must first run the OpMode from the Driver Station and then stop it once the robot's speed stops increasing.
Finally, you can open the tuning page on your robot's Wi-Fi network, as the Road Runner docs say.
