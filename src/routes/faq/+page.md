---
layout: faq
---

## How do I install Meteor?

If you have encountered or used YouTube "tutorials" on how to install and use Meteor, please disregard them.  
Many of them are incorrect or outdated and, as stated below, we do not support older versions.

<br>

To install Meteor Client:

1. Download the Meteor Client, choosing one of two options:
    - `Release`: this version is updated less frequently, but is preferred if you don't want to update often.  
      You can download it on the [official website](https://meteorclient.com/download);
    - `Dev build`: this version is updated frequently, but can have some bugs.  
      You can get this version from the [official website](https://meteorclient.com/download?devBuild=latest),
      the `#dev-builds` channel in the [Meteor Discord](https://meteorclient.com/discord), or by compiling the source
      from [GitHub](https://github.com/MeteorDevelopment/meteor-client).
2. Create a Fabric instance in your Minecraft launcher, and choose the `latest` version of Minecraft;
3. Go in the `mods` folder of the newly created instance, and paste the `meteor-client-x.x.x-xxxx.jar` file in it;
4. Run the instance, and if you did everything correctly, you should see a text in the top right corner indicating that
   you are using Meteor.

<br>

For in-depth installation instructions, refer to the [Installation guide](https://meteorclient.com/faq/installation).

## How do I use Meteor on older Minecraft versions?

While we do not directly support older versions of Minecraft, you can refer to
the [Old versions](https://meteorclient.com/faq/old-versions) guide.

## How do I open the GUI?

The default key for opening the GUI is <kbd>Right Shift</kbd>, which you can change this via the Minecraft controls
menu.  
Inside the GUI, you can left-click on a Module to toggle it and right click to configure its settings.

## How do I use the HUD?

- Go to the HUD tab (the top of the screen).
- Check the "Active" checkbox to enable it.
- Tweak any settings you would like and use the "Edit" button to access the HUD editor.

![image](https://user-images.githubusercontent.com/52252627/181027124-4126a6c6-1608-4148-9527-d9fa93213a97.png)

A red highlight on the hud element indicates that they are **OFF**. Simply left click to toggle and right click to
configure.

## How do I import and export configs?

You can use Copy and Paste shortcuts in the GUI to copy and paste configs.

- Windows and Linux: <kbd>Ctrl</kbd> + <kbd>C</kbd> and <kbd>Ctrl</kbd> + <kbd>V</kbd>
- MacOS: <kbd>⌘</kbd> + <kbd>C</kbd> and <kbd>⌘</kbd> + <kbd>V</kbd>

You can also use this feature in individual modules and individual tabs (GUI, Config, HUD, etc).

## How to use Meteor with Optifine?

Optifine is not and will never be supported by Meteor. We recommend using these instead:

<!-- prettier-ignore -->
| Mod                                             | Description                                     |
|-------------------------------------------------|-------------------------------------------------|
| [Sodium](https://modrinth.com/mod/sodium)       | Performance improvements (better than Optifine) |
| [Lithium](https://modrinth.com/mod/lithium)     | Server optimisations                            |
| [Starlight](https://modrinth.com/mod/starlight) | Lighting engine improvements                    |

More alternatives and the detailed reason Optifine is not
supported [here](https://lambdaurora.dev/optifine_alternatives/).

## How do I use Baritone with Meteor?

Baritone is no longer included with Meteor. Features that depend on Baritone will be disabled unless you put Baritone
into your mods folder manually. This will allow us to decouple Meteor from Baritone and update to newer versions faster.

### Using Baritone

Baritone's default command prefix is `#`.
You can view all of Baritone's commands [here](https://github.com/cabaletta/baritone/blob/master/USAGE.md) and
settings [here](https://baritone.leijurv.com/baritone/api/Settings.html).

## Why can't I talk in the Meteor Discord?

You may have broken one of the rules in
the [#rules](https://discord.com/channels/689197705683140636/816501672477720626/) channel and have been muted by staff
or the auto-moderator.

If you did not break a rule,
then [this](https://discord.com/channels/689197705683140636/689198722097348624/870066829622652989) might explain why.
Due to the amount of users in the discord server increasing, public channels have been closed to only users who have
roles. You can get a role by creating an account [here](https://meteorclient.com/account).

## How to use the proxy system?

It works just like a normal socks proxy. If you don't know what a proxy is, then I suggest
you [google it](https://letmegooglethat.com/?q=proxy) and find out.
