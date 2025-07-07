# Pedro Pathing vs Road Runner

| Feature | Pedro Pathing | Road Runner |
|--------|--------|--------|
| **Path Following** | Path Follower | Trajectory follower using motion profiling | **Visualizer** | Web-based using a nonstandard (0 - 144) coordinate scheme | Code-based using the standard FTC coordinate scheme |
| **Tuning** | Half manual and half automatic | Nearly all automatic |
| **Motor Write Caching** | Used by default | Able to be implemented manually |
| **Paths** | Cubic Bezier curves | Quintic Hermite splines |
| **Bulk Reads** | Able to be implemented manually | Used by default |
| **Logs** | Not built in | Automatic logging of every run |
| **Priority** | Speed | Time consistency |

| Information | Pedro Pathing | Roadrunner |
|--------|--------|--------|
| **Docs** | <https://pedropathing.com> | <https://rr.brott.dev/docs/v1-0/installation/> |
| **Quickstart** | <https://github.com/Pedro-Pathing/Quickstart> | <https://github.com/acmerobotics/road-runner-quickstart/tree/master/> |
| **Visualizer** | <https://visualizer.pedropathing.com> |  <https://github.com/acmerobotics/meepmeep> |
| **Library** | <https://github.com/Pedro-Pathing/PedroPathing> | <https://github.com/acmerobotics/road-runner/> |


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
