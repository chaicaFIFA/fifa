let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . 5 d d d 5 . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . d 2 2 . 2 2 2 2 2 . 2 2 d . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . d d . d d . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . 7 7 7 . 7 7 7 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
