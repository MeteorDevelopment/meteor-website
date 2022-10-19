---
layout: faq
---

## Downloading

When you download Meteor, you can choose one of two options:
* `Release`: this version is updated less frequently, but is preferred if you don't want to update often.  
    You can download it on the [official website](https://meteorclient.com/download);
* `Dev build`: this version is updated frequently, can have some bugs, but often has less then the release.  
    You can get this version from the [official website](https://meteorclient.com/download?devBuild=latest), the `#dev-builds` channel in the [Meteor Discord](https://meteorclient.com/discord), or by compiling the source from [GitHub](https://github.com/MeteorDevelopment/meteor-client).  

*Disclaimer: If your antivirus flags Meteor as dangerous, it is probably because it is an executable (jar) file.  
If you have any concerns feel free to check the source code located within this repository.*

## Installing

### Prerequisites
To play Minecraft, you'll need to have the compatible version of the JRE (Java Runtime Environment).  
Usually Minecraft downloads it automatically, but if it doesn't, you should get it from [Adoptium](https://adoptium.net/temurin/releases).  
The current version used by Minecraft 1.19.2 is v17.

### Unsafe cracked launchers
Avoid using closed source third-party launchers (`TLauncher` is a common example).  
Since nobody can look at the code, the developers could insert malicious code, that could potentilally harm your devices.  
We do not provide support to cracked users in any way, as they do not legally own the game.

### Minecraft Launcher
If you already have Fabric Loader installed, skip to step 4.

1. Download the [Fabric installer](https://fabricmc.net/use/) and run it.
2. Make sure the correct Minecraft version is selected, the path to your `.minecraft` folder is correct, and `create profile` is checked.
3. Click `Install` and then wait for the process to complete.
4. Open your `.minecraft` folder and create a folder within it called `mods` if it does not exist already.
5. Go to where you downloaded Meteor and drag the jar file into the mods folder.  
*Note: If the file appears to be a zip because of winrar, it isn't! just ignore that as it is still a jar*
6. Open the Minecraft Launcher and select the Fabric profile.
7. Thats it, just click `Launch` to start up Meteor.

### MultiMC/PolyMC/PrismLauncher
If you already have one of these installed, skip to step 2.  
If you already have an instance with Fabric Loader, skip to step 4.  

1. Download [MultiMC](https://multimc.org/#Download), [PolyMC](https://polymc.org/download/), or [PrismLauncher](https://prismlauncher.org/) and install it.
2. Open the launcher and click `Add Instance`, make sure the correct Minecraft version is selected, choose the `Fabric` loader in the bottom window, and press `OK`.
3. Click `Edit Instance` with your new instance selected and then click `Install Fabric` then `OK`.
4. [Download](#downloading) your desired version of meteor from above.
5. Go back to the launcher and click the `Mods` tab in the edit instance window, drag the downloaded meteor jar into the middle of the mods screen.
6. Thats it, just click `Launch` to start up Meteor.

