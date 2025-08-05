import { scaleFactor } from "./constants";
import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png", {        // okay so cuz of vite we don't have to pass it as /public/spritesheet.png cuz in vite it assumes all files in same directory~
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 948,
        "walk-down": {from: 948, to: 951, loop: true, speed: 8},
        "idle-side": 987,
        "walk-side": {from: 987, to: 990, loop: true, speed: 8},
        "idle-up": 1026,
        "walk-up": {from: 1026, to: 1029, loop: true, speed: 8}
    }
})  

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", async () => {
    // logic for the scene
    const mapData = await (await fetch("./map.json")).json()
    const layers = mapData.layers;

    const map = k.make([                    // making a game object
        k.sprite("map"),                    // already loaded "map" from the loadSprite fxn so we can use it here~
        k.pos(0),
        k.scale(scaleFactor)
    ]);     
    
    const player = k.make([
        k.sprite("spritesheet", {anim: "idle-down"}),   // default anim: idle-down
        k.area({
            shape: new k.Rect(k.vec2(0, 3), 10, 10)
        }),
        k.body(),
        k.anchor("center"),
        k.pos(),
        k.scale(scaleFactor),
        {                                       // now defining some object properties
            speed: 250,
            direction: "down",
            isInDialogue: false,
        },
        "player",
    ]);

    for(const layer of layers) {
        if(layer.name === "boundaries") {
            for(const boundary of layer.objects) {
                map.add([                       // making a child object from an already existing object~
                    k.area({
                        shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
                    }),
                    k.body({ isStatic: true}),
                    k.pos(boundary.x, boundary.y),
                    boundary.name,
                ]);
            }

            if(boundary.name) {
                player.onCollide(boundary.name, () => {
                    player.isInDialogue = true;
                    // TODO
                });
            }
        }
    }
});

k.go("main");