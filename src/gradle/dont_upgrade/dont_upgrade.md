# Don't upgrade the Gradle version or Android Gradle Plugin version

Android studio loves to tempt you with this little pop up, prompting you to
upgrade the Android Gradle Plugin (AGP).

![Android Studio upgrade AGP message](./upgrade_agp_message.png)

You need to click on [More] > Don't show again for this project. This will
prevent the issue from occurring again.

These upgrades are not productive, and interfere with the current gradle build,
even if you get it working on your computer, it may cause issues with team
member's computers, and it makes it harder to upgrade the SDK when a new version
releases. Additionally, it may cause issues when working with other gradle
operations, like adding libraries.

If you accidentally upgrade the AGP or the Gradle version, you should hopefully
be able to use git to undo the change, or, you can override those files with
ones from the SDK.

It may be possible to undo the changes more simply by downgrading again.

> It may be easier to find these files with the file explorer set to `Project`
mode, rather than `Android` mode.
![AS file explorer modes](./as_file_explorer_modes.png)

## `10.1.1` onwards

The AGP version should be `8.7.0`. It is set in the project root `build.gradle`.
![AGP version](./agp_version[>=10.1.1].png)

The Gradle version should be `8.9`. It is set in `gradle/wrapper/gradle-wrapper.properties`.
![Gradle version](./gradle_wrapper_version[>=10.1.1].png)

## Before `10.1.1`

The AGP version should be `7.2.0`. It is set in the project root `build.gradle`.
![AGP version](./agp_version[<10.1.1].png)

The Gradle version should be `7.4.2`. It is set in `gradle/wrapper/gradle-wrapper.properties`.
![Gradle version](./gradle_wrapper_version[<10.1.1].png)
