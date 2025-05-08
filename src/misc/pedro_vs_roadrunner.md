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
- Has a no-code, browser-based path visualizer.
- Caches motor writes by default.
- Corrects for centripetal force to hold the robot onto curved paths.

**Cons of Pedro:**
- Newer, so potentially buggier.
- Less people use it compared to Road Runner.
- Tuning is mostly manual. <!-- 4 automatically tuned constants, minimum of 32 manually tuned constants -->
- Not necessarily time-consistent; speed is prioritized over consistency
- Visualizer uses a nonstandard (0 - 144) coordinate scheme
- Quickstart code is not under the standard TeamCode package name, 
making using SlothLoad and integrating existing projects more difficult.
- Does not bulk read by default.
- No logs, so no replays of each run and much more difficult debugging.
- No AdvantageScope support.

---

**Road Runner** is a motion-profiling-based follower library
that includes a command-based action system and geometry. 

It prioritizes time consistency above all else.

- Docs: <https://rr.brott.dev/docs/v1-0/installation/>
- Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>
- Library: <https://github.com/acmerobotics/road-runner/>
- Visualizer: <https://github.com/acmerobotics/meepmeep>

**Pros of Road Runner:**
- Stable, minimal bugs if any.
- Time consistent by default.
- Tuning is almost fully automated, making it difficult to screw up. <!-- 5 automatically tuned constants, 3 manually tuned constants -->
- Extensively tested and used by thousands of teams; almost all possible problems have been solved before.
- Uses the FIRST-recommended standard coordinate system consistently.
- Works with SlothLoad immediately.
- Bulk reads by default.
- Built-in custom logs, for easier debugging and full replays of every run.
- [Full AdvantageScope support.](https://github.com/Mechanical-Advantage/AdvantageScope/pull/373)

**Cons of Roadrunner:**
- Prioritizes time consistency above all else, meaning potentially worse correction.
- Slower speed by default.
- Path visualizer is code based.
- Does not cache motor writes by default.
- No built-in centripetal force correction.

<!--

Guidelines for editing this page:

Differences must be objective issues from a neutral point of view, not one sided.
Ideally, people with biases in both directions should agree about these differences.

Each difference will be listed twice, as a pro of one library and as a con of another. 

Actively avoid being reductive or summarizing into an overall recommendation;
the idea of the page is that both libraries are good for different needs,
and the reader should decide for themself which library aligns with their priorities.

The amount of pros or cons for a library is not intended to imply that library is definitely better
or definitely worse, and being neutral does not mean that the amount of pros and cons need to be equal. 

If you feel that a library has too many cons, consider fixing the underlying issues they reference
and improving the experience for all users. Let us know (in an issue, PR, or in the Cookbook Discord)
after this happens and we will be happy to remove it from the list.


-->

*Last Updated: 2025-3-29*   
