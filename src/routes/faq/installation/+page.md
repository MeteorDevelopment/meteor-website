---
layout: faq
---

## Downloading

Meteor is continuously updated to support the latest version of Minecraft and can be downloaded from
our [home page](https://meteorclient.com).  
If you're looking for a slightly older version of Meteor (from `1.21.4` and up), check out
the [archive](https://meteorclient.com/archive).  
Advanced users may also [compile Meteor from source](https://meteorclient.com/faq/old-versions), though this is not
recommended for most players.

_Disclaimer: If your antivirus flags Meteor as dangerous, it is probably because it is an executable (JAR) file.  
If you have any concerns feel free to check the source code located
within [this](https://github.com/MeteorDevelopment/meteor-client/) repository._

## Installing

### Prerequisites

To play Minecraft, you'll need to have the compatible version of the JRE (Java Runtime Environment).  
Usually Minecraft downloads it automatically, but if it doesn't, you should get it
from [Adoptium](https://adoptium.net/temurin/releases/?package=jre&version=21).  
The current version used by Minecraft is Java 21.

### Unsafe cracked launchers

Avoid using closed source third-party launchers (`TLauncher` is a common example).  
Since nobody can look at the code, the developers could insert malicious code, that could potentially harm your
devices.  
We do not provide support to cracked users in any way, as they do not legally own the game.

### Non-standard launchers

Some launchers, such as `Feather Client`, `Lunar Client`, and similar, modify the Minecraft JAR or environment in
non-standard ways.  
This often causes incompatibilities with Meteor and other mods.

As a result, we cannot provide support for issues encountered when using these launchers.  
We recommend using a standard or mod-friendly launcher such as `Prism Launcher`, `MultiMC`, or the official Minecraft
launcher.

### Minecraft Launcher

If you already have Fabric Loader installed, skip to step 4.

1. Download the [Fabric installer](https://fabricmc.net/use/) and run it.
2. Make sure the correct Minecraft version is selected, the path to your `.minecraft` folder is correct,
   and `create profile` is checked.
3. Click `Install` and then wait for the process to complete.
4. Open your `.minecraft` folder and create a folder within it called `mods` if it does not exist already.
5. Go to where you downloaded Meteor and drag the JAR file into the mods folder.  
   _Note: If the file appears to be a zip because of WinRAR, or the icon is missing, ignore that as it is still a JAR_
6. Open the Minecraft Launcher and select the Fabric profile.
7. That's it, just click `Launch` to start up Meteor.

### PrismLauncher/MultiMC

If you already have one of these installed, skip to step 2.  
If you already have an instance with Fabric Loader, skip to step 4.

1. Install [PrismLauncher](https://prismlauncher.org/download/) or [MultiMC](https://multimc.org/#Download).
2. Open the launcher and click `Add Instance`, make sure the correct Minecraft version is selected, choose the `Fabric`
   loader in the bottom window, and press `OK`.
3. Click `Edit Instance` with your new instance selected and then click `Install Fabric` then `OK`.
4. [Download](#downloading) your desired version of meteor from above.
5. Go back to the launcher and click the `Mods` tab in the edit instance window, drag the downloaded meteor JAR into the
   middle of the mods screen.
6. That's it, just click `Launch` to start up Meteor.
