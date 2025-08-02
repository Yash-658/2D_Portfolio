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