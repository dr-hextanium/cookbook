# Vref small/V0 large/backwards in per tick in Roadrunner 1.0

### Ingredients

1. A Road Runner 1.0 setup
2. Running Manual Feedforward Tuner


## The Recipe

### The problem

Sometimes, when you run the manual feedforward tuner, your robot will show ridiculously high values for v0 and v1.
These numbers can often be in the hundreds of thousands. 
Something like this graph:

![image of graph with huge numbers](../static/vref_small_v0_high_rr_10/badgraph.webp)


Another symptom of this issue is if the manual feedforward tuner barely moves at all.

### Solution
The underlying cause of this issue is your inpertick value being a really large number.
Inpertick should be a tiny number, significantly less than one;
when running forward push test, you must divide the number of inches pushed by the number of ticks recorded, not the other way around.

To fix this issue, you will need to run forward push test again, recalculate the correct number, and then redo your tuning from there.