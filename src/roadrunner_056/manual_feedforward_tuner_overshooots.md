# Manual Feedforward Tuner Overshoots

This is normal! The REV hub's motor controller are not great at decelerating, so this typically causes about a 10% overshoot on manual feedforward tuner. It's okay to move on the the next tuning steps. However, when you get to the feedback tuning, whether it's "back and forth" or "followerPIDTuner", you will want to add a non-zero kd term. This will help the robot not overshoot.

*Last Updated: 2024-01-20*