# Manual Feedforward Tuner Overshoots

This is normal! 
The REV hub motor controllers are not great at decelerating, so this typically causes about a 10% overshoot on manual feedforward tuner. 
It is okay to move on to the next tuning steps. 

However, when you get to the feedback tuning, whether it's "Back and Forth" or "FollowerPIDTuner," you will want to add a non-zero kD term. 
This will help the robot not overshoot.

*Last Updated: 2024-05-30*