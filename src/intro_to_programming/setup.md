# Setup
This is a guide designed to assist new FTC programmers setup the [Android Studio](https://developer.android.com/studio/) environment to program a robot.
## Ingredients
A **Computer** that has the [required specs](https://developer.android.com/studio/install) for [Android Studio](https://developer.android.com/studio/) and installing [Java](https://www.oracle.com/java/technologies/downloads/). <br>
Access to **Admin Permissions** on aforementioned computer.<br>

## Software to be Installed
**FTC SDK**: [FtcRobotController](https://github.com/FIRST-Tech-Challenge/FtcRobotController)<br>
**IDE**: [Android Studio](https://developer.android.com/studio/)<br>
**Java**: Any recent version of [Java](https://www.oracle.com/java/technologies/downloads/)<br>
**ADB**: [Android Debug Bridge](https://developer.android.com/tools/releases/platform-tools)<br>

## Recipe (Installation)
1. **Download and Install [Java](https://www.oracle.com/java/technologies/downloads/)**:
   **<br>NOTE: Installing [Java](https://www.oracle.com/java/technologies/downloads/) may require Admin Permissions.**
    - Download the latest version of [Java](https://www.oracle.com/java/technologies/downloads/).
    - Run the installer and follow the on-screen instructions. <br>
      <br>
2. **Download and Install [Android Studio](https://developer.android.com/studio/)**:
 **<br>NOTE: Installing [Android Studio](https://developer.android.com/studio/) may require Admin Permissions.**
    - Download the latest version of [Android Studio](https://developer.android.com/studio/).
    - Run the installer and follow the on-screen instructions.
    - Open [Android Studio](https://developer.android.com/studio/). <br>
      <br>
3. **Download and Open [FtcRobotController](https://github.com/FIRST-Tech-Challenge/FtcRobotController)**:
    - In the [FtcRobotController](https://github.com/FIRST-Tech-Challenge/FtcRobotController) GitHub repository, press the blue **code** button and press [download zip](https://github.com/FIRST-Tech-Challenge/FtcRobotController/archive/refs/heads/master.zip). 
      - You can alternatively use [Github Desktop](https://desktop.github.com/) to open [FtcRobotController](https://github.com/FIRST-Tech-Challenge/FtcRobotController) in [Android Studio](https://developer.android.com/studio/), which is not covered in this Recipe.  
    - Extract the contents of the zip file to a folder (typically in your Downloads or Documents folder).
    - In [Android Studio](https://developer.android.com/studio/), press File &rarr; Open (⌘ + O on Mac or Win + O on Windows).
    - Select the folder you extracted the zip file to, and press open. **DO NOT** open any folder inside the extracted folder.
        - On MacOS, you can alternatively drag the folder from Finder onto the [Android Studio](https://developer.android.com/studio/) icon in your taskbar to open the folder.
    - Wait for the project to load. You should end up with 3 folders in the Android view panel (which you should automatically be moved to once ready): **FtcRobotController**, **TeamCode**, and **Gradle Scripts**. <br>
        <br>
4. **Install** [**ADB**](https://developer.android.com/studio/releases/platform-tools):
    **<br>NOTE: Installing [ADB](https://developer.android.com/studio/releases/platform-tools) may require Admin Permissions.**
    - Download the latest version of [ADB](https://developer.android.com/studio/releases/platform-tools).
    Press on one of the three links depending on your operating system.
    - Extract the contents of the zip file to a folder (typically in your Downloads or Documents folder).
    - Add the folder to your system's PATH variable:
        - **Windows**:
            - Open the start menu and search for "Environment Variables", and press enter.
            - Click on "Edit the system environment variables".
            - Click on "Environment Variables".
            - In the "System variables" section, find the "Path" variable and click "Edit".
            - Click "New" and paste the path to the folder where you extracted the zip file.
            - Click "OK" on all the windows.
        - **Mac**: <br>
          - Option 1 - Using [Homebrew](https://brew.sh/) (Highly Recommended) <br>
            [Homebrew](https://brew.sh/) is a package manager for Mac. This is the easiest way and will provide automatic updates.
            - Install the [Homebrew](https://brew.sh/) package manager by running the following command in a terminal:  
            ```bash
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
              ```
            
            - Then, run this command to install [ADB](https://developer.android.com/studio/releases/platform-tools) using [Homebrew](https://brew.sh/):
            ```bash
            brew install android-platform-tools
               ```
          - Option 2 - Manual Installation
            - Go to your Downloads folder with this command in terminal:
            ```bash
            cd ~/Downloads/
               ```
            - Then, to avoid deleting the ADB files, move the downloaded file to a new folder (the commands below should still work with modern versions of MacOS):
            ```bash
            mkdir ~/.android-sdk-macosx
            mv platform-tools/ ~/.android-sdk-macosx/platform-tools
              ```
            - Add `platform-tools` to your path
            ```bash
            echo 'export PATH=$PATH:~/.android-sdk-macosx/platform-tools/' >> ~/.bash_profile
              ```
            - Reload your terminal profile (or restart your terminal):
            ```bash
            source ~/.bash_profile
              ```
        - **Linux**: 
          <br>[ADB](https://developer.android.com/studio/releases/platform-tools) should already be installed by default with the installation of Android Studio. If not, you can use the following steps below to install [ADB](https://developer.android.com/studio/releases/platform-tools) manually:<br>
          <br>
          - Open a terminal window and run the following command:
            ```bash
            nano ~/.bashrc
            ```
            - Add the following line to the file:
            ```bash
            export PATH=$PATH:/path/to/adb/folder
            ```
            - Press `Ctrl + X`, then `Y`, then `Enter` to save the file.
            - Run the following command:
            ```bash
            source ~/.bashrc
            ```
    - Finally, to check that your properly installed [ADB](https://developer.android.com/studio/releases/platform-tools), in the Android Studio Terminal (Control + F12 on Windows or ⌘ + F12 on Mac), or on your default/preferred terminal, run the following command:
    ```bash
    adb devices
    ```
    - If you see a message saying `List of devices attached`, you have successfully installed ADB (even if there are no devices attached).

Congratulations! You have successfully installed the necessary software to program an FTC robot. You can now start programming your robot.

## Troubleshooting
- If you have questions/issues with the installation process, the [Unofficial FTC Discord](https://discord.gg/first-tech-challenge) has many experienced programmers who can help you with all sorts of issues, including installation issues.
- Last updated on May 30th, 2024.