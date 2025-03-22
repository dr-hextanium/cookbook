# Pedro Pathing vs Road Runner

**Pedro Pathing** is a path-following library that utilizes a reactive vector follower
that implements translational, heading, and centripetal force correction
to dynamically converge to the target position. 

**Links:**
- Docs: <https://pedropathing.com>
- Quickstart: <https://github.com/Pedro-Pathing/Quickstart>
- Library: <https://github.com/Pedro-Pathing/PedroPathing>
- Visualizer: <https://visualizer.pedropathing.com>

**Pros of Pedro:** 
- Can make your bot drive faster.  
- Excellent correction for unexpected disturbances.
- Has a no-code, browser-based path visualizer

**Cons of Pedro:**
- Newer, so potentially buggier.
- Less people use it compared to Road Runner.
- Not necessarily time-consistent; speed is prioritized over consistency
- Visualizer uses a nonstandard (0 - 144) coordinate scheme

---

**Road Runner** is a motion-profiling-based follower library
that includes a command-based action system and geometry. 

It prioritizes time consistency above all else.

- Library Repo: <https://github.com/acmerobotics/road-runner/>
- Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>
- Official Docs: <https://rr.brott.dev/docs/v1-0/installation/>

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
- Path visualizer is code based


*Last Updated: 2025-3-21*   
