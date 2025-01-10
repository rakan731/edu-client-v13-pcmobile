// if you see this, Hi!
player.onChat("cx", function (item) {
    player.teleport(pos(item, 0, 0))
})
player.onChat("help3", function () {
    player.say("xp amount - gives you xp")
    player.say("day - sets time to day")
})
player.onChat("give", function (item, Amount) {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.blockById(item),
    Amount
    )
})
player.onChat("xp", function (num1) {
    gameplay.xp(num1, mobs.target(LOCAL_PLAYER))
    player.say("gave you " + num1 + " xp")
})
player.onChat("portal", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    OBSIDIAN,
    16
    )
    loops.pause(50)
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    FLINT_AND_STEEL,
    1
    )
})
player.onChat("gms", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("stopscaffold", function () {
    Scaffoldhack = 0
    player.say("Scaffold off.")
})
player.onChat("cw", function () {
    gameplay.setWeather(CLEAR)
})
player.onChat("cy", function (item) {
    player.teleport(pos(0, item, 0))
})
player.onChat("help", function () {
    player.say("cx number - teleport on the x axis ")
    player.say("cy number - same as cx but on the y axis")
    player.say("cz number - same as cx but on the z axis")
    player.say("scaffold - places blocks under you")
    player.say("stopscaffold - stops scaffold")
    player.say("give itemid amount - gives you any item")
    player.say("link to id list: https://www.digminecraft.com/lists/item_id_list_edu.php")
    player.say("sblock blockid - changes scaffold block")
    player.say("dia - gives you 10 diamonds")
    player.say("type help2 for next page")
})
player.onChat("scaffold", function () {
    if (Scaffoldhack == 1) {
        Scaffoldhack = 0
        player.say("Scaffold off")
    } else {
        Scaffoldhack = 1
        player.say("Scaffold on.")
    }
    while (Scaffoldhack == 1) {
        blocks.place(Blockid, pos(0, -1, 0))
    }
})
player.onChat("cz", function (item) {
    player.teleport(pos(0, 0, item))
})
player.onChat("food", function () {
    player.say("Gave you 16 steak.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    COOKED_BEEF,
    16
    )
})
player.onChat("deez", function () {
    player.say("nuts")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    POTATO,
    1
    )
})
player.onChat("gmc", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("dia", function () {
    player.say("Gave you 10 diamonds.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND,
    10
    )
})
player.onChat("sblock", function (num1) {
    Blockid = num1
})
player.onChat("day", function () {
    player.say("Set time to day.")
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("barrier", function () {
    player.execute(
    "give @s barrier 64"
    )
})

//https://www.youtube.com/watch?v=IIJM3S9H5m0

player.onChat("kit", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_HELMET,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_BOOTS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_AXE,
    1
    )
})
player.onChat("bedrock", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BEDROCK,
    64
    )
})
player.onChat("help2", function () {
    player.say("food - gives you 16 cooked beef")
    player.say("deez -  nuts")
    player.say("cw - clear weather")
    player.say("portal - gives you 16 obsidian and 1 flint and steel")
    player.say("kit - gives you full diamond armor and tools")
    player.say("gmc - sets gamemode to creative")
    player.say("gms - sets gamemode to survival")
    player.say("bedrock - gives you a stack of bedrock")
    player.say("barrier - gives you a stack of barrier blocks")
    player.say("type help3 for next page")
})
let Blockid = 0
let Scaffoldhack = 0
let item = DIRT
Blockid = 3
Scaffoldhack = 0
player.say("EDU CLIENT V1.26")
player.say("type help for a list of commands")
