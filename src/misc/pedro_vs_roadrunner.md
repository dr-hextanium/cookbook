# Pedro Pathing vs Road Runner

**Pedro Pathing** is a recently-created library (created early 2024, last updated 10/28/24)
somewhat based on Road Runner 0.5.
It uses a custom algorithm to follow trajectories with speed as a top priority. 

Docs: <https://pedropathing.com/>

Quickstart: <https://github.com/AnyiLin/Pedro-Pathing-Quickstart>

**Pros of Pedro:**

- Can make your bot drive faster
- Support for recent sensors (otos, pinpoint) is official/built in (note: Pinpoint support broken as of 12/19/24)
- Very good correction for unexpected disturbances

**Cons of Pedro:**

- Newer, so potentially less stable and/or buggier
- All the code is in the quickstart instead of in a library, so updating is harder
- Less people are familiar with it and able to help
- Not necessarily time consistent
- Uses nonstandard coordinate system by default/in visualizer (as of 11/24/24)
- Docs are lacking
- As of 12/19/24 Pinpoint support is completely broken(!)

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
- Easier to update and integrate with compared to Pedro; code is split into libraries
- Lots of projects integrating with it
- Uses standard coordinate system

**Cons of Roadrunner:**

- Prioritizes time consistency above all else, meaning potentially worse speed and correction
- Support for recent sensors like otos and pinpoint is unofficial
(though still exists, made by j5155)

*Last Updated: 2024-11-25*