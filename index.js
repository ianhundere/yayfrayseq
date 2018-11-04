const monomeGrid = require("monome-grid");

async function run() {
  let grid = await monomeGrid(); // grid identifier is passed

  // initialize 2d led array
  let led = [];
  for (let y = 0; y < 16; y++) {
    led[y] = [];
    for (let x = 0; x < 16; x++) led[y][x] = 0;
  }

  clear = true;

  const refresh = function() {
    if (clear) {
      grid.refresh(led);
      clear = false;
    }
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

  // call refresh() is called 60 times per second
  setInterval(refresh, 1000 / 60);

  // key handler
  grid.key((x, y, s) => {
    led[y][x] = s * 15;
    clear = true;
  });
}

run();
