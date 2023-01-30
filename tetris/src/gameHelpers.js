export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        Array(STAGE_WIDTH).fill([0, "clear"])
    );

// Collision Check
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // 1. Check that we're on an actual Tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    //  Check  game areas height (y)
                    // check blocks not go through bottom of the play area
                    !stage[y + player.pos.y + moveY] ||
                    //  Check move is inside the game areas width (x)
                    !stage[y + player.pos.y + moveY][
                        x + player.pos.x + moveX
                    ] ||
                    //  Check  cell we are moving to isn't set to clear
                    stage[y + player.pos.y + moveY][
                        x + player.pos.x + moveX
                    ][1] !== "clear"
                ) {
                    return true;
                }
            }
        }
    }

    return false;
};
