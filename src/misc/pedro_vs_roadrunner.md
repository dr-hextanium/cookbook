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
- Caches motor writes by default.

**Cons of Pedro:**
- Newer, so potentially buggier.
- Less people use it compared to Road Runner.
- Not necessarily time-consistent; speed is prioritized over consistency
- Visualizer uses a nonstandard (0 - 144) coordinate scheme
- Quickstart code is not under the standard TeamCode package name, 
making using SlothLoad and integrating existing projects more difficult.
- Does not bulk read by default.

---

**Road Runner** is a motion-profiling-based follower library
that includes a command-based action system and geometry. 

It prioritizes time consistency above all else.

- Library Repo: <https://github.com/acmerobotics/road-runner/>
- Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>
- Official Docs: <https://rr.brott.dev/docs/v1-0/installation/>

**Pros of Road Runner:**
- Stable, minimal bugs if any.
- Time consistent by default.
- Extensively tested and used by thousands of teams, it integrates with many projects, and someone in the FTC Discord has almost certainly faced your issue before.
- Uses the FIRST-recommended standard coordinate system consistently.
- Works with SlothLoad immediately.
- Bulk reads by default.

**Cons of Roadrunner:**
- Prioritizes time consistency above all else, meaning potentially worse correction.
- Slower speed by default.
- Path visualizer is code based.
- Does not cache motor writes by default.

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
