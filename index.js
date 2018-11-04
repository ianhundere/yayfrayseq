const monomeGrid = require("monome-grid");

async function run() {
  let grid = await monomeGrid();

  let led = [];
  for (let y = 0; y < 15; y++) {
    led[y] = [];
    for (let x = 0; x < 15; x++) led[y][x] = 0;
  }

  const refresh = function() {
    led[2][4] = 15;
    led[2][9] = 15;
    led[5][4] = 15;
    led[6][5] = 15;
    led[6][6] = 15;
    led[6][7] = 15;
    led[6][8] = 15;
    led[5][9] = 15;
    grid.refresh(led);
  };

  setInterval(refresh, 1000 / 60);

  grid.key((x, y, s) => console.log(`key received: ${x}, ${y}, ${s}`));
}

run();
