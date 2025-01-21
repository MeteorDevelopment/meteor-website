## Meteor and older versions of Minecraft

Meteor is always kept up to date with the latest stable release of Minecraft, this means we do not support the use of
older Meteor/Minecraft versions. We understand that some people may want to play older versions of Minecraft, so here
are some ways to do so.

### Third-party downloads

The only official place to get older Meteor releases is
our [GitHub repository](https://github.com/MeteorDevelopment/meteor-client).  
Many websites claim to offer "archived" versions of Meteor, but these are not official and may contain malware.  
A simple scan through services like VirusTotal will not be enough to detect malware in JAR files.  
JAR files are executable, so they can be dangerous if not obtained from a trusted source.

### Using ViaFabricPlus

ViaFabricPlus lets you experience all the new features of Meteor, while being able to join servers running older
versions of Minecraft.  
These steps expect you to use the latest version of Minecraft, Meteor and ViaFabricPlus.

<br>

1. Download Meteor as instructed in the [Installation guide](https://meteorclient.com/faq/installation).
2. Download [ViaFabricPlus](https://modrinth.com/mod/viafabricplus/versions) and put it in your `mods` folder.
3. If you are using other mods, make sure they are all up to date with the latest Minecraft version.
4. Launch the game and click `Multiplayer`; here, you should select the server you want to join and click the `Edit` button.
5. A new `Set version` button should appear, click it and select the version required by the server you want to join.

<br>

You can repeat the last two steps for every server you want to join, specifying accordingly the version of the server.  
For more detailed instructions, you can refer to
the [ViaFabricPlus wiki](https://github.com/ViaVersion/ViaFabricPlus/blob/main/docs/USAGE.md).

### Building from source

If you want to use an older version of Meteor, you can build it from source.  
Keep in mind that this is **not** recommended, as we do **not** provide support for older versions.  
Any threads opened in our support forum regarding failed builds of older versions will be closed.  
If you encounter any issues, you will have to update to the latest version to get support.

To build Meteor for source, you'll need a **Java 21 JDK**,
you can get it from [Adoptium](https://adoptium.net/temurin/releases/?package=jdk&version=21).

<br>

1. Go to the [Meteor GitHub repository](https://github.com/MeteorDevelopment/meteor-client).
2. Click the `gradle.properties` file, it will contain the `minecraft_version` that the latest commit is built for.
3. Click the `master` button in the top left, then click the `Tags` tab.
4. Click on a tag, this will bring you to the repository at the state of that tag.
5. Checkout tags from newer to older until you find the one where `minecraft_version` matches the one you want.
6. Once you have found the tag you want, click the `Code` tab in the top left,
   then click the green `Code` button on the right and select `Download ZIP`.
7. Set your `JAVA_HOME` environment variable (read more about it [here](https://www.baeldung.com/java-home-on-windows-mac-os-x-linux)).
8. Extract the zip file and open a terminal in the extracted folder.
9. Run the `gradlew build` command (or `.\gradlew build` on PowerShell).
   This will build Meteor and put the JAR file in the `build/libs` folder.
10. Copy the `meteor-client-x.x.x.jar` file to your `mods` folder.

<br>

This process is not guaranteed to work for all versions of Meteor, as some dependencies may have changed or no longer be
available. In that case, you will have to build the dependencies from source as well. (We do not provide support for
this)
