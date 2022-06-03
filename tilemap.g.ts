// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001000000000101010101010101010101010000000001000000000000000000010100000000010000000000000000000101000000010100000000000000000001010000000101010100000000000000010101000000000001000000000000000101010000000000010101010000000001010101010000000000000101010000010100000100010000000001010100000101000001000100000101010101000001010000010001010101000000000000010100000101010100000000000000000101000000000000000001010101000001010000000000000000010101010000010101000001010101010101010100000101010000010101010101010101000001`, img`
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 . . . . . . . . . 2 
2 . . . 2 2 2 2 . . . . . . . 2 
2 2 . . . . . 2 . . . . . . . 2 
2 2 2 . . . . 2 2 2 2 . . . . 2 
2 2 2 2 . . . . . . 2 2 2 . . 2 
2 . . 2 . 2 . . . . 2 2 2 . . 2 
2 . . 2 . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 . 2 2 2 2 . . . . . . 2 
2 . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . 2 2 2 2 . . 2 
2 . . . . . . . . 2 2 2 2 . . 2 
2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
