---
layout: faq
---

## Meteor Addon Template

Our template is a great way to get started with Meteor addon development.  
The following guide will show you how to set up a new project using said template.  
We will be using [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download/), but you can use any IDE.

<br>

First, a couple of prerequisites:

- Knowledge of [**Java**](https://docs.oracle.com/en/java/javase/21/docs/api/index.html) programming, [**Git
  **](https://git-scm.com/docs) for version control and [**Gradle
  **](https://docs.gradle.org/current/userguide/about_manual.html#about_manual) for dependency management.
- A [GitHub](https://github.com/) account to host your repository.
- A [Git](https://git-scm.com/downloads) client for all the Git commands.
- A Java-compatible IDE, IntelliJ IDEA in this case.
- (Optional) A Java 21 JDK, we recommend [Adoptium](https://adoptium.net/temurin/releases/?package=jdk&version=21). You
  can also
  use the one bundled with IntelliJ IDEA.

<br>

We will not be teaching you how to use Git, Java, Gradle or IntelliJ IDEA in detail. That is out of the scope of this
guide.  
If you are not familiar with any of these, we recommend you to learn the basics before continuing, or learn as you go.  
You can find documentation and many tutorials online for all of these topics.

### Git setup

To set up Git, we'll need your GitHub **username** and **email**.  
The first one is easy, it's the name you use to log in to GitHub.  
The second one can be found in your [GitHub Email settings](https://github.com/settings/emails).
It ends with `@users.noreply.github.com`.

Here, be sure to check the `Keep my email addresses private` and `Block command line pushes that expose my email`
boxes.  
This will prevent your personal email from being exposed in commits.

<br>

You can now set up Git:

1. Download and install Git from the link above.
2. Once that is done, open a terminal and run the following commands:
    ```shell
    git config --global user.name YOUR_GITHUB_USERNAME
    git config --global user.email YOUR_GITHUB_EMAIL
    ```
3. You can now close the terminal and open IntelliJ IDEA.

### Project setup

1. Go to the [Meteor Addon Template](https://github.com/MeteorDevelopment/meteor-addon-template) repository.
2. Click the green `Use this template` button and select `Create a new repository`.
3. Give your repository a name, check whether you want it to be publicly available or private, and
   click `Create repository`.
4. In your newly created repository, click the green `Code` button and copy the HTTPS URL.
5. Open IntelliJ IDEA and click `Get from VCS` in the top right.
6. Paste the URL you copied earlier, select a directory to start your project and click `Clone`.

<br>

At this point, your project should be set up and ready to go.  
You can test it by running the `Minecraft Client` run configuration in the top right.

### Important files

The template contains the following important files:

- `com.example.addon.Addon`:
  The entry point of your addon, it extends the extends `MeteorAddon` class.  
  This is where you will register your modules, commands, HUD elements, etc.
- `src/main/resources/fabric.mod.json`, better explained by
  the [fabric.mod.json](https://fabricmc.net/wiki/documentation:fabric_mod_json) specification.  
  The Fabric mod metadata file contains information about your addon, and you should change these fields:
    - `id`: The mod identifier of your addon.
    - `name`: The user-facing mod name.
    - `description`: The user-facing mod description.
    - `authors`: The list of authors.
    - `contact`: The contact information for the project, such as the repository URL, Discord server, etc.
    - `entrypoints/meteor`: The string pointing to your addon's entrypoint class.
    - `mixins`: The list of mixin configuration files for the Mixin library as filenames relative to the mod
      root.
    - `custom/meteor-client:color`: RGB comma separated value used for the color of your addon's credits in the main
      menu.
- `build.gradle.kts`: The Gradle build script contains the [Loom](https://github.com/FabricMC/fabric-loom) version, the
  mod's dependencies, and other useful
  variables.
- `gradle.properties`: The Gradle properties file contains the Minecraft version used by the project,
  along with the version of your addon,
  it's `maven_group` ([explained here](https://maven.apache.org/guides/mini/guide-naming-conventions.html))
  and `archives_base_name` (the
  name of your mod's JAR file).  
  Keep your versions of Meteor, Minecraft, and other dependencies if you have any, up to date.
- `README.md`: The README file contains information about your addon, such as a description, installation
  instructions, etc. You can use [Markdown](https://www.markdownguide.org/basic-syntax/) to format your README.

<br>

You might also want to add a `LICENSE` file to your repository, which contains the license of your addon.  
GitHub suggest [choosealicense](https://choosealicense.com/) to help you pick one.  
If you want a more exhaustive list, you can use the [SPDX License List](https://spdx.org/licenses/) instead.

### Fabric mod development

At its core, Meteor and its addons are Fabric mods.  
Our template is set up to work with Fabric, and follows the same conventions.

Some useful resources that will help you with our template, and Fabric mod development in general:

- The [Fabric Wiki](https://fabricmc.net/wiki), especially
  the [fabric.mod.json](https://fabricmc.net/wiki/documentation:fabric_mod_json)
  specification.
- The [Fabric Development](https://fabricmc.net/develop) page, which shows version numbers useful for
  the `gradle.properties`
  file.
- The [Mixin](https://github.com/SpongePowered/Mixin/wiki)
  and [MixinExtras](https://github.com/LlamaLad7/MixinExtras/wiki) wikis, which explain how to use the mixin system.
- The [Mixin Javadoc](https://jenkins.liteloader.com/view/Other/job/Mixin/javadoc/allclasses-noframe.html), which show
  all the
  available mixins in a readable format.
- The [Mixin cheatsheet](https://github.com/2xsaiko/mixin-cheatsheet), which shows example usages of mixins.
- The [Linkie](https://linkie.shedaniel.dev/mappings) website, which lets you search for mappings, useful for mixins.

<br>

This is not an exhaustive list, but it should be enough to get you started.

### Closing notes

Meteor's source code is not documented, so it may be hard to understand its inner workings.  
The project structure, class, method and field names try to be as descriptive as possible.  
You can look at the source code of other Meteor addons to see how they work and learn from them.

Our template is always up-to-date with the latest version of Meteor and Minecraft,
and we encourage you to do so as well with your addons.
