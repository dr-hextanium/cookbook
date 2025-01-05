# Pedro Pathing vs Road Runner

**Pedro Pathing** is a recently-created library for autonomous.  
It uses a GVF algorithm utilizing Bézier Curves to follow trajectories with speed as a top priority.  

- Docs: https://pedropathing.com
- Quickstart: https://github.com/Pedro-Pathing/Quickstart

**Pros of Pedro** 
- Can make your bot drive faster.  
- Support for recent sensors (OTOS, Pinpoint) is official/built-in.  
- Excellent correction for unexpected disturbances.  
- Now exists as a standalone library, making updates and integration much easier.

**Cons of Pedro:**

- Newer, so potentially less stable/buggier.
- Less people are familiar with it and able to help.
- Not necessarily time consistent.
- Uses a nonstandard coordinate system by default/in visualizer.

**Road Runner** is a motion profiling-based follower library
that includes a command-based action system and geometry. 

It was originally (0.5) created late 2020(?),
with version 1.0 created mid-2023 and last updated 10/13.

It prioritizes time consistency above all else.

Library Repo: <https://github.com/acmerobotics/road-runner/>

Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>

Official Docs: <https://rr.brott.dev/docs/v1-0/installation/>


**Pros of Roadrunner:**

- Very stable, minimal bugs if any
- Time consistent autonomous
- Tons of support, used by hundreds or thousands of teams
- Tons of people able to help you in FTC Discord; someone has almost certainly had your problem before
- Lots of projects integrating with it
- Uses standard coordinate system

**Cons of Roadrunner:**

- Prioritizes time consistency above all else, meaning potentially worse correction
- Slower speed by default
- Support for recent sensors like otos and pinpoint is unofficial
(though still exists, made by j5155)

This page also available on [Pedro Docs](https://pedropathing.com/misc/pedrovsrr.html)

*Last Updated: 2025-1-5*