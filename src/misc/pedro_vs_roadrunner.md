# Pedro Pathing vs Road Runner

**Pedro Pathing** is a recently-created library for aiding teams autonomous programs.  
It uses a custom algorithm utilizing Bézier Curves to follow trajectories with **speed as a top priority**.  

- Docs: https://pedropathing.com
- Quickstart: https://github.com/Pedro-Pathing/Quickstart

**Pros of Pedro** 
- Can make your bot drive faster.  
- Support for recent sensors (otos, pinpoint) is official/built-in.  
- Excellent correction for unexpected disturbances.  
- Now exists as a standalone library, making updates and integration much easier.  
- Documentation has significantly improved, with clear examples and tutorials.  
- The Pedro Discord community has grown rapidly, offering helpful support and active troubleshooting assistance.  

**Cons of Pedro**
- Still newer and may have potential edge-case bugs.  
- Less time consistency compared to Road Runner.  
- Uses a nonstandard coordinate system by default/in the visualizer.

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

**Summary**
- Choose Pedro Pathing if speed and ultra accurate dynamic correction are your primary concerns, and you're comfortable with slightly newer technology.  
- Choose Road Runner if time consistency, stability, and community support are your top priorities, and you're okay with unofficial sensor integrations.  

*Last Updated: 2025-1-5*
