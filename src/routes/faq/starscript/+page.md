---
layout: faq
---

# Starscript

[Starscript](https://github.com/MeteorDevelopment/starscript) is the formatting language currently used in HUD, Discord
Presence and .say command.  
Full syntax can be found [here](https://github.com/MeteorDevelopment/starscript/wiki).

## Variables

A list of standard variables can be
found [here](https://github.com/MeteorDevelopment/starscript/wiki#standard-variables).

### General

- `version`: Meteor version.
- `mc_version`: Minecraft version.
- `fps`: Current FPS.
- `ping`: Your ping.
- `time`: Time of your computer.

### Meteor

- `meteor.modules`: Total number of modules.
- `meteor.active_modules`: Number of active modules.
- `meteor.is_module_active(id)`: Returns true when the specified module is active.
- `meteor.get_module_info(id)`: Returns the module info string.

### Baritone

- `baritone.is_pathing`: Returns true when Baritone is currently pathing.
- `baritone.distance_to_goal`: Estimated distance to the goal.
- `baritone.process`: Current process.
- `baritone.process_name`: Current process name.

### Camera

- `camera.pos.x`: Camera's X position.
- `camera.pos.y`: Camera's Y position.
- `camera.pos.z`: Camera's Z position.
- `camera.opposite_pos.x`: Camera's X position in the opposite dimension.
- `camera.opposite_pos.y`: Camera's Y position in the opposite dimension.
- `camera.opposite_pos.z`: Camera's Z position in the opposite dimension.
- `camera.yaw`: Camera's yaw rotation.
- `camera.pitch`: Camera's pitch rotation.
- `camera.direction`: Direction the camera is facing.

### Player

- `player`: Username.
- `player.health`: Player's health.
- `player.hunger`: Player's hunger.
- `player.speed`: Speed in blocks per second.
- `player.breaking_progress`: Block breaking progress.
- `player.biome`: Biome you are in.
- `player.dimension`: Dimension you are in.
- `player.opposite_dimension`: Opposite dimension to the one you are in.
- `player.pos`: Player's position formatted as `X: 0 Y: 0 Z: 0`.
- `player.pos.x`: Player's X position.
- `player.pos.y`: Player's Y position.
- `player.pos.z`: Player's Z position.
- `player.opposite_pos.x`: Player's X position in the opposite dimension.
- `player.opposite_pos.y`: Player's Y position in the opposite dimension.
- `player.opposite_pos.z`: Player's Z position in the opposite dimension.
- `player.yaw`: Player's yaw rotation.
- `player.pitch`: Player's pitch rotation.
- `player.direction`: Direction the player is facing.
- `player.hand`: Player’s main held item. See [Item](#item).
- `player.offhand`: Player’s offhand held item. See [Item](#item).
- `player.hand_or_offhand`: Player’s main held item. See [Item](#item).
- `player.get_item(slot)`: Item in the specified slot. See [Item](#item).
- `player.count_items(id)`: Number of items in the entire inventory.
- `player.xp.level`: Player's XP level.
- `player.xp.progress`: Player's XP progress to the next level (0-1).
- `player.xp.total`: Player's total XP points.
- `player.has_potion_effect(id)`: Checks whether the player has the specified potion effect.
- `player.get_potion_effect(id)`: Returns the effect or null if the player doesn't have it.
  See [Potion Effect](#potion-effect).
- `player.get_stat(id)`, `player.get_stat(id, type)`: Returns the specified statistic for the player (updated once per
  second). Supported types are: mined, crafted, used, broken, picked_up, dropped, killed, killed_by and custom (custom
  is the default).

### Crosshair target

- `crosshair_target.type`: Either `miss`, `block` or `entity` string.
- `crosshair_target.value`: Either empty string, [Block](#block) or [Entity](#entity).

### Server

- `server`: Server name.
- `server.tps`: Server's TPS.
- `server.time`: Server's time formatted as `16:00`.
- `server.player_count`: Server's player count.
- `server.difficulty`: Server's difficulty.

## Objects

Various variables and functions can return more complex objects which fields can be accessed using `.`. An empty ` `
means the object iself and not accessing any field.

### Item

- ` `: Item's name formatted as `Stone 32x` or just `Stone` if count is 1.
- `name`: Item's name.
- `count`: Number of items.
- `durability`: Current durability.
- `max_durability`: Maximum durability.

### Block

- ` `: Block's name.
- `pos`: Block's position formatted as `X: 0 Y: 0 Z: 0`.
- `pos.x`: Block's X position.
- `pos.y`: Block's Y position.
- `pos.z`: Block's Z position.

### Entity

- ` `: Entity's name.
- `health`: Entity's health or 0 if the entity doesn't have health.
- `pos`: Entity's position formatted as `X: 0 Y: 0 Z: 0`.
- `pos.x`: Entity's X position.
- `pos.y`: Entity's Y position.
- `pos.z`: Entity's Z position.

### Potion Effect

- `duration`: Effect's duration in ticks.
- `level`: Effect's level.
