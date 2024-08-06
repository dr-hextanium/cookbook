# Introduction to Git and GitHub
This guide is designed to help FTC teams understand how to use Git and GitHub to track changes, collaborate better, and recover previous versions. There are often multiple ways to accomplish the same task when using Git, so this guide will explain the method we think is the easiest.

### Git vs GitHub
**Git** is a version control system that tracks changes in code over time, allowing you to collaborate effectively. **GitHub** is a platform that hosts Git repositories, providing additional features like code review, issue tracking, and collaborative coding. Git needs to be downloaded onto your device in order to use both Git and GitHub.

## Ingredients
1. Internet access
2. A computer
3. Android Studio
4. A [GitHub](https://github.com/) account and organization.
    - To create an account, follow the steps on [GitHub's website](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).
    - While creating an organization is technically optional, it is highly recommended for FTC teams. To do that, follow the directions on [GitHub's website](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch). 
    - In addition, user accounts can only create one fork of a repository, while organization accounts can create multiple. This makes it easier for your team to set up a repository for each season. 

## Recipe
### 0. Installing Git
The easiest way to install Git on your device is to download it from [Git's download page](https://git-scm.com/downloads). Simply select your operating system and follow the instructions on the website.

### 1. Forking the Repository 
This step only needs to be done once.

> A Fork on GitHub is a copy of another repository on GitHub from one account to another account. The new forked repository retains a parent-child relationship with the origin repository. Forks are typically used when software will have an independent line of development, such as when FTC teams develop their own team code using the FIRST-Tech-Challenge/FtcRobotController repository as a basis. FTC teams should create a Fork of the FIRST-Tech-Challenge/FtcRobotController repository as a convenient way to manage their software development process. Thanks to the parent-child relationship, when changes are made to the parent repository those changes can be easily tracked and fetched/merged into the forked repository, keeping the forked repository up to date.
-  The FIRST Tech Challenge documentation

First, you're going to need to open the [FtcRobotController repository](https://github.com/FIRST-Tech-Challenge/FtcRobotController). The FtcRobotController repo is the Software Development Kit (SDK) provided by FIRST so teams can create the robot controller Android app on their Control Hubs or RC Phones. Once you have opened the repo, click the `Fork` button in the upper-right-hand corner. That will bring you to a page that looks like this: 

![The fork page](../static/intro_to_git/fork.png)

Under the `Owner` dropdown, select your organization (if you elected to create one), as opposed to your individual user account. Under `Repository name`, I recommend naming your repo after the current FTC season (such as Into The Deep or CenterStage). After that, press `Create fork` and you're good to move on to the next step.

#### 1.5 Logging into GitHub on Android Studio
First, open your [GitHub token settings](https://github.com/settings/tokens), either by clicking on that link or by going to Account Settings -> Developer Settings -> Tokens (Classic). Press `Generate new token (classic)` at the top and that will take you to a page that looks like this:

![The token generation page](../static/intro_to_git/personal_access_token.png)

For `Note`, write the use case of the token, such as "Android Studio". For `Expiration`, select `No expiration`, which may cause GitHub to warn you. For `Select scopes`, select `repo`, `workflow`, `read:org`, and `gist`. Click `Generate token` and copy it.

Now open Android Studio. Open your settings and then to `Version Control` -> `GitHub`. At the top left corner of the box, press the `+` icon and `Log in with token...`, and paste in the token you just generated.

### 2. Opening Your Fork in Android Studio
This step needs to be done by everyone who intends on programming for your team.

First, at the top of your new repository, press the green `Code` button. Under that tab, copy the HTTP url of your repo.

Next you're going to open Android Studio and navigate to the `New Project from Version Control` menu. To do that, do `File` -> `New` -> `Project from Version Control`, which should bring you to a menu that looks like this:

![Get from VCS menu](../static/intro_to_git/get_from_vcs.png)

For the URL, paste in the link that you just copied from your repo. Then press `Clone`. At this point, Android Studio will ask you whether you want to open the project in this window or a new window. Regardless of what you choose, AS will then do an initial Gradle build of the project. Do not attempt to modify any files during that process. Once AS is done, proceed to the next step.

### 3. Creating a Branch
This step is technically optional, but highly recommended in order to take advantage of all of Git's features. A branch is a way for multiple users to work on the same project without messing with each other's work, and a commit is essentially a snapshot of all changes after a certain point (the previous commit). In the following image, each circle represents a commit in the branch. 

![Branches and Commits](../static/intro_to_git/branches.png)

Personally, I recommend creating branches for each feature your team intends on creating. To do that in AS, in the top menu to go `Git` -> `New Branch`, and type in the name of that feature. AS will automatically checkout that branch, meaning all future commits from your client will be to that branch.

At this point, you are free to start adding and editing files! Unless you absolutely know what you are doing, *do not* edit any files outside of the `TeamCode/src/main/java/org/firstinspires/ftc/teamcode` directory unless told to do so by another guide. 

Once you make some changes, proceed to the next step. 

### 4. Your First Commit
Now that you've made some changes, press the button on the left side that looks like a line with a circle on it (just like the circles in the above image) to open the Commit menu in Android Studio. That will look somewhat like this:

![The commit menu](../static/intro_to_git/commit%20menu.png)

I recommend selecting all files under the `Changes` section. Then, write a commit message in the box in the lower portion of the menu to describe what you've changed. In this example, I added a `MecanumChassis` wrapper and edited some other files, so that's what I wrote in my commit message. The length and complexity of your commit messages is up to you and your team, and that should be a discussion you have with them.

Once you're done, press `Commit and Push...` which will commit your changes and push them to  `Remote`, the version of your repo on the internet (as opposed to your device). Then you can move on to the next step (if you chose to make multiple branches; if not, proceed to step 6).

### 5. Pull Requests
A pull request is how you can merge changes from one branch to another! For example, you can move experimental features into the main/stable branch.

At this point, we're going back to the GitHub website. Open your repository and hit the `Pull Requests` tab in the top left, which will open a page that looks somewhat like this:

![Pull requests](../static/intro_to_git/pull_request.png)

Make sure that both repositories are the same (your repo). Then, for base, select `master`, and for `compare` select whatever branch you were working with. Press `Create pull request` and type the name and description of the commit(s) you are working with, and then press `Create pull request` again.

At this point, GitHub will automatically determine if there are merge conflicts. If there are not, you're free to press `Merge pull request`.

### 6. Pulling To Android Studio
If you've committed files to GitHub, you might want to pull that commit on another device. To do that, open the Git menu in AS, which can be seen below.

![Git menu](../static/intro_to_git/git_menu.png)

At this point, right click on the branch you intend on pulling from, and press `Merge origin/<branch> into <branch>`. This will simply update those files in your local branch, or download them if they were created in the commit. 



