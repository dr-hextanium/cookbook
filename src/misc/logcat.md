# FTC Robot Logs using Logcat

**[Joe Schmoe | 6767]**: *Nothing works, its all Sloth's fault! @Oscar*\
**[Oscar | !sloth]**:    *Send me a log!*\
**[Oscar | !sloth]**:    *!cb logcat*

## What is Logcat?
Logcat is a utility built into Android Studio, which can be used to view,
analyze, import and export logs from the robot.

FTC software library developers or friendly people helping you to debug your
code will often ask you to send a log in order to determine the issue that you
might be facing, and this page contains the simple instructions to capture and
send a relevant log for them.

## Ingredients
1. Device with Android Studio installed
2. REV Driver Station to run programs

## The Recipe

#### 1. Connect your computer to the robot
![REV Control Hub connection](../static/logcat_help/rev-control-hub.png)
#### 2. Click **Logcat** in the bottom left of Android Studio
![Android Studio Logcat panel](../static/logcat_help/android-studio-logcat.png)
#### 3. Click **Delete**
![Clear Logcat button](../static/logcat_help/clear-logcat.png)
#### 4. Restart the robot
![Driver station restart](../static/logcat_help/restart-robot.png)
#### 5. Reproduce the issue (Run the part that causes the issue)
![Reproduce the issue in OpMode](../static/logcat_help/reproduce-issue-opmode.png)
#### 6. Click **Export** and send the log
![Export Logcat file](../static/logcat_help/export-logcat.png)
#### 7. Send to helper so they can analyze the file
![Davis Helping Sid](../static/logcat_help/davis_helping.png)
