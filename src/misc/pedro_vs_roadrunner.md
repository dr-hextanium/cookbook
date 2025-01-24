# Pedro Pathing vs Road Runner

**Pedro Pathing** is a recently-created library for autonomous.  
It uses a GVF algorithm utilizing Bézier Curves to follow trajectories with speed as a top priority.  

- Docs: https://pedropathing.com
- Quickstart: https://github.com/Pedro-Pathing/Quickstart

**Pros of Pedro** 
- Can make your bot drive faster.  
- Support for recent sensors (OTOS, Pinpoint) is official/built-in.  
- Excellent correction for unexpected disturbances.
- Has a no-code, browser-based path visualizer

**Cons of Pedro:**

- Newer, so potentially less stable/buggier.
- Fewer people are familiar with it and able to help.
- Not necessarily time-consistent.
- Visualizer uses a nonstandard coordinate scheme, complicating AprilTag integration.

**Road Runner** is a motion-profiling-based follower library
that includes a command-based action system and geometry. 

It was originally (0.5) created late 2020(?),
with version 1.0 created mid-2023 and last updated 10/13.

It prioritizes time consistency above all else.

Library Repo: <https://github.com/acmerobotics/road-runner/>

Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>

Official Docs: <https://rr.brott.dev/docs/v1-0/installation/>


**Pros of Road Runner:**

- Stable, minimal bugs if any
- Time consistent by default
- Extensively tested. It's used by thousands of teams that are able to help you in the FTC Discord, 
and someone has almost certainly had your problem before.
- Lots of projects integrate with it
- Uses the FIRST-recommended standard coordinate system consistently

**Cons of Roadrunner:**

- Prioritizes time consistency above all else, meaning potentially worse correction
- Slower speed by default
- Support for recent sensors like the SparkFun OTOS and Pinpoint is unofficial
(though still exists, made by j5155)
- Path visualizer is code based


*Last Updated: 2025-1-5*