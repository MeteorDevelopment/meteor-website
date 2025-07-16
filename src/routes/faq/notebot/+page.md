---
layout: faq
---

## Loading songs

To load songs you need to put a file with supported format inside folder located in `.minecraft/meteor-client/notebot`
_(Create it, if it doesn't exist)_.

## Supported formats

- Classic `.nbs` [Download](https://github.com/thatcraniumguy/Songs/tree/master/NBS%20files)
- OpenNBS v5 `.nbs` [Download](https://opennbs.org/songs)
- .txt files using format `<tick>:<note>`

## Previewing

Before playing songs you can preview them. To preview a song you can either:

- Press the <kbd>Preview</kbd> button next to the song you want to preview
- Use the `.notebot preview <song>` command

## Playing

To play a song you can either:

- Place noteblocks around you in a 5 block radius
- Hold noteblocks in your hotbar and let the module do all the work

To start playing a song you can press the <kbd>Load</kbd> button next to the song you want to load or use
the `.notebot play <song>` command

## Recording

You can also record in-game sound to play them back later.

1. Run `.notebot record start` to start recording
2. Stand next to some noteblocks
3. Run `.notebot record save <name>`

After that you will see your new recording inside the list of recordings
