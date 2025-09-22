// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="tags.html">Tags</a></li><li class="chapter-item expanded affix "><li class="part-title">Introduction to Programming</li><li class="chapter-item expanded "><a href="intro_to_programming/setup.html"><strong aria-hidden="true">1.</strong> Development Environment Setup</a></li><li class="chapter-item expanded "><a href="intro_to_programming/intro_to_git.html"><strong aria-hidden="true">2.</strong> Introduction to Git and Github</a></li><li class="chapter-item expanded affix "><li class="part-title">Gradle</li><li class="chapter-item expanded "><a href="gradle/downgrading_gradle_jdk/downgrading_gradle_jdk.html"><strong aria-hidden="true">3.</strong> Downgrading the Gradle JDK on Android Studio Ladybug</a></li><li class="chapter-item expanded "><a href="gradle/dont_upgrade/dont_upgrade.html"><strong aria-hidden="true">4.</strong> Don&#39;t upgrade the Gradle version or Android Gradle Plugin version</a></li><li class="chapter-item expanded "><a href="gradle/project_templates/project_templates.html"><strong aria-hidden="true">5.</strong> Alternate Project Setups / Templates</a></li><li class="chapter-item expanded affix "><li class="part-title">Road Runner 1.0</li><li class="chapter-item expanded "><a href="roadrunner_10/null_list_error_in_rr_10.html"><strong aria-hidden="true">6.</strong> Empty list error in Road Runner 1.0</a></li><li class="chapter-item expanded "><a href="roadrunner_10/complete_trajectorybuilder_reference.html"><strong aria-hidden="true">7.</strong> Complete TrajectoryBuilder Reference</a></li><li class="chapter-item expanded "><a href="roadrunner_10/vref_small_v0_high_rr_10.html"><strong aria-hidden="true">8.</strong> Vref small/v0 high/backwards in per tick</a></li><li class="chapter-item expanded affix "><li class="part-title">Road Runner 0.5.6</li><li class="chapter-item expanded "><a href="roadrunner_056/is_the_bump_on_manual_feedforward_tuner_normal.html"><strong aria-hidden="true">9.</strong> Is the bump on feedforward tuner normal?</a></li><li class="chapter-item expanded "><a href="roadrunner_056/manual_feedforward_tuner_overshooots.html"><strong aria-hidden="true">10.</strong> Manual feedforward tuner overshoots</a></li><li class="chapter-item expanded "><a href="roadrunner_056/manual_feed_forward_tuner_opposite_velocities.html"><strong aria-hidden="true">11.</strong> Manual Feedforward tuner opposite velocity</a></li><li class="chapter-item expanded "><a href="roadrunner_056/robot_localization_makes_circle_when_spinning_in_place.html"><strong aria-hidden="true">12.</strong> Robot localization makes circles when spinning in place</a></li><li class="chapter-item expanded "><a href="roadrunner_056/robot_velocity_plateaus_below_target_velocity_plateau.html"><strong aria-hidden="true">13.</strong> Robot velocity plateaus below target velocity plateau</a></li><li class="chapter-item expanded "><a href="roadrunner_056/robot_drifts_to_one_side_during_manual_feedforward_tuning.html"><strong aria-hidden="true">14.</strong> Robot drifts to one side during feedforward tuning</a></li><li class="chapter-item expanded "><a href="roadrunner_056/robot_drifts_while_tuning_follower_pid.html"><strong aria-hidden="true">15.</strong> Robot drifts while tuning follower PID</a></li><li class="chapter-item expanded "><a href="roadrunner_056/robot_drives_full_speed_on_start_when_following_trajectory.html"><strong aria-hidden="true">16.</strong> Robot drives full speed on start when following trajectory</a></li><li class="chapter-item expanded "><a href="roadrunner_056/how_to_integrate_a_PIDF_controller_with_roadrunner/how_to_integrate_a_PIDF_controller_with_roadrunner.html"><strong aria-hidden="true">17.</strong> How to integrate a PIDF controller with Road Runner</a></li><li class="chapter-item expanded affix "><li class="part-title">Common Driver Station Error Messages</li><li class="chapter-item expanded "><a href="common_ds_errors/npe_at_init/npe_at_init.html"><strong aria-hidden="true">18.</strong> NullPointerException on initialization</a></li><li class="chapter-item expanded affix "><li class="part-title">PID(F) Controllers</li><li class="chapter-item expanded "><a href="pidf_controllers/integrating_a_custom_PIDF_controller.html"><strong aria-hidden="true">19.</strong> Integrating a Custom PID(F) Controller</a></li><li class="chapter-item expanded "><a href="pidf_controllers/syncing_two_linear_slide_motors_using_a_pidf_controller/syncing_two_linear_slide_motors_using_a_pidf_controller.html"><strong aria-hidden="true">20.</strong> Syncing two linear slide motors using a PID(F) Controller</a></li><li class="chapter-item expanded affix "><li class="part-title">Electrical</li><li class="chapter-item expanded "><a href="electrical/why_we_should_only_use_usb_30.html"><strong aria-hidden="true">21.</strong> Why to only use USB 3.0</a></li><li class="chapter-item expanded "><a href="electrical/how_to_wire_odometry_pods.html"><strong aria-hidden="true">22.</strong> How to wire odometry pods</a></li><li class="chapter-item expanded affix "><li class="part-title">Miscellaneous</li><li class="chapter-item expanded "><a href="misc/why_kotlin/why_kotlin.html"><strong aria-hidden="true">23.</strong> Why Kotlin?</a></li><li class="chapter-item expanded "><a href="misc/terminology_and_acronyms.html"><strong aria-hidden="true">24.</strong> Terminology and Acronyms</a></li><li class="chapter-item expanded "><a href="improving_loop_times/improving_loop_times.html"><strong aria-hidden="true">25.</strong> Improving Loop Times</a></li><li class="chapter-item expanded "><a href="misc/pedro_vs_roadrunner.html"><strong aria-hidden="true">26.</strong> Pedro Pathing vs Road Runner</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
