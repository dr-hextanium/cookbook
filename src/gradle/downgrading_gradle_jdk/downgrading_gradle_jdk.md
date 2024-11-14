# Downgrading the Gradle JDK on Android Studio Ladybug

From version Ladybug | 2024.2.1 of Android Studio (AS), the software ships with
Java 21 as the Gradle JDK.

This causes build issues for FTC projects.

The error looks like this:
![erroring build](./failed_gradle_build.png)

Although its tempting to press one of those magical blue links, this is a
horrible idea.

The correct fix here is to downgrade the Gradle JDK version to 17, which is
fairly easy to do.

![Android Studio Gradle settings menu](./as_gradle_settings.png)

Select an option for Gradle JDK that is JDK version 17, and rebuild.

If you have no JDK 17 available, then you can click the download JDK option to
install JDK 17.
