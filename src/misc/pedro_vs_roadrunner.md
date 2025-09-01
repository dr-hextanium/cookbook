# Pedro Pathing vs Road Runner

For FTC, when it comes to path following, there are two main solutions, **Road Runner** and **Pedro Pathing**.
Although both are designed to achieve the same task, each has its own benefits and tradeoffs. The table
below compares the different features.

# Pedro Pathing vs Road Runner
| Feature                 | Pedro Pathing                                                                    | Road Runner                                            |
|-------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------|
| **Following**           | Path Follower that adapts along the path, uses centripetal force correction | Trajectory follower using pre-planned motion profiling |
| **Visualizer**          | Web-based, no-code, easier to use, generates code for the user                   | Requires user code to generate paths                   |
| **Tuning**              | Half manual and half automatic                                                   | Nearly all automatic                                   |
| **Motor Write Caching** | Used by default                                                                  | Able to be implemented manually                        |
| **Default Paths**       | Bezier curves by default, custom curves can be implemented extremely easily                                                                    | Quintic Hermite splines                                |
| **Priority**            | Speed and Precision                                                              | Time consistency                                       |
| **Command Integration** | External (FTCLib, SolversLib, NextFTC), Flexible                                 | Built-in (Actions), External libraries unsupported     |

---

| Information | Pedro Pathing | Roadrunner |
|--------|--------|--------|
| **Docs** | <https://pedropathing.com> | <https://rr.brott.dev/docs/v1-0/installation/> |
| **Quickstart** | <https://github.com/Pedro-Pathing/Quickstart> | <https://github.com/acmerobotics/road-runner-quickstart/tree/master/> |
| **Visualizer** | <https://visualizer.pedropathing.com> |  <https://github.com/acmerobotics/meepmeep> |
| **Library** | <https://github.com/Pedro-Pathing/PedroPathing> | <https://github.com/acmerobotics/road-runner/> |

---

**Pros and Cons of Road Runner:**
Road Runner typically prioritizes time consistency above all else, using pre-planned motion profiling. This allows the following of full trajectories with preset speed and acceleration constraints created by the user.
The Road Runner tuning pass is nearly automatic, making it more accessible for many users (although the actual tuning time doesn't necessarily vary too much from Pedro Pathing). Due to prioritizing time-consistency, Road Runner defaults to about 80% of the robot's maximum speed when path-following, a major drawback. Furthermore, the motion model doesn't account for the reduced speed due to strafing, which can often produce inaccurate motion.
Road Runner has a built-in action system, but you cannot use any other action system in conjunction with Road Runner. If a user uses a certain external command-base in their TeleOp, they cannot use it in auto.

**Pros and Cons of Pedro Pathing:**
Pedro Pathing typically prioritizes speed and precision while following the path. The follower corrects the robot back to the target position when outside forces create inaccuracies in the robot's position or heading, while still following the path. Pedro Pathing also uses centripetal force correction, so it is able to follow curved paths better. Similar to custom p2p and Pure Pursuit algorithms, Pedro Pathing typically moves the robot along the path much faster than Road Runner.
While Pedro Pathing does not currently have built-in command integration, Pedro supports external command bases so the user can choose according to their preferences.
A major advantage of Pedro Pathing is its path visualizer. The visualizer is web-based, doesn't require the user to write any code, and even generates code for the user. The visualizer is also typically considered to be easier to use, since "eyeballing paths" can be done by arbitrarily dragging control points until a desired path is achieved. To assist in storage, these paths can then be exported concisely into a single, re-uploadable file.
<!-- The above information is taken from the Pedro Pathing Docs: https://github.com/Pedro-Pathing/Docs/blob/master/content/docs/pathing/pedro-v-roadrunner.mdx & <https://pedropathing.com/docs/pathing/pedro-v-roadrunner> -->

<!--

Guidelines for editing this page:

Differences must be objective issues from a neutral point of view, not one sided.
Ideally, people with biases in both directions should agree about these differences.

Actively avoid being reductive or summarizing into an overall recommendation;
the idea of the page is that both libraries are good for different needs,
and the reader should decide for themself which library aligns with their priorities.

The amount of pros or cons for a library is not intended to imply that library is definitely better
or definitely worse, and being neutral does not mean that the amount of pros and cons need to be equal. 

If you feel that a library has too many cons, consider fixing the underlying issues they reference
and improving the experience for all users. Let us know (in an issue, PR, or in the Cookbook Discord)
after this happens and we will be happy to remove it from the list.

-->

*Last Updated: 2025-07-07*   
