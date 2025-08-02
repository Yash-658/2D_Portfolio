import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png", {        // okay so cuz of vite we don't have to pass it as /public/spritesheet.png cuz in vite it assumes all files in same directory~
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 936,
    }
})