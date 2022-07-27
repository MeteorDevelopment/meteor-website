The Minecraft launcher keeps logs of game events as they happen which can be useful for debugging errors or other issues that may occur within the game.

The latest log begins logging after Minecraft successfuly launches. Sometimes error messages are logged there and are helpful in troubleshooting certain errors and crashes that happen in-game.

## Instructions

### Step 1
Start Minecraft and run it to the point where the crash/error occurs. Then close Minecraft and keep it closed.

### Step 2
Locate your `.minecraft` folder. The process is different whether you're using [Windows](#windows), [macOS](#macos) or [Linux](#linux).

#### Windows
1. Press <kbd>⊞ Win</kbd> + <kbd>R</kbd>
2. Type `%appdata%\.minecraft`
3. Press OK.

![windows run dialog](https://user-images.githubusercontent.com/18114966/181196927-19a0cb10-dd57-4034-9b86-6b8f6a0dda0a.png)

#### macOS
1. Switch to Finder
2. Press <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>
3. Type `~/Library/Application Support/minecraft`
4. Press Go

![macos finder](https://user-images.githubusercontent.com/18114966/181197786-e8c83bb0-54a7-42ed-8ea9-3c7987d3b3aa.png)

#### Linux
On Linux, the Minecraft data folder is located in `~/.minecraft`.

### Step 3
Open the `logs` folder inside the `.minecraft` folder.

![logs folder](https://user-images.githubusercontent.com/18114966/181198699-4ee39967-623b-4432-9228-205cea54f51b.png)

### Step 4
In the Logs folder, scroll down and find a file called `latest` or `latest.log`.  Double click the file to open it in Notepad.

![latest.log file](https://user-images.githubusercontent.com/18114966/181199377-1e6af9d2-4495-44da-a2f6-8ffbbb0ed040.png)

### Step 5
Select the entire contents (<kbd>Ctrl</kbd>+<kbd>A</kbd> or <kbd>⌘</kbd>+<kbd>A</kbd>) of the file and copy it (<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>⌘</kbd>+<kbd>C</kbd>).

### Step 6
Open [pastebin.com](https://pastebin.com/) and paste (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>⌘</kbd>+<kbd>V</kbd>) the contents into the largest field.

### Step 7
Press `Create New Paste` and on the next page, copy the URL from the address bar and give it to whoever requested the log. Wait for further instructions.