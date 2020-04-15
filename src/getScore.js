/*
const data = [
  [
    { checked: false },
    { checked: false },
    { checked: true },
    { checked: false },
    { checked: false },
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
  ],
  [
    { checked: true },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: true },
  ],
  [
    { checked: false },
    { checked: true },
    { checked: false },
    { checked: false },
    { checked: false },
  ],
];
*/

function getScore(board) {
  return board.reduce((score, row) => {
    return (
      score +
      row.reduce((counter, cell) => {
        return counter + (cell.checked ? 1 : 0);
      }, 0)
    );
  }, 0);
}

// by @Kimtaro
export function getScore1(board) {
  let score = 0;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.checked) {
        score += 1;
      }
    });
  });
  return score;
}

// by @Kimtaro
export function getScore2(board) {
  let score = 0;
  for (let y = 0; y < board.length; y += 1) {
    for (let x = 0; x < board[y].length; x += 1) {
      if (board[y][x].checked) {
        score += 1;
      }
    }
  }
  return score;
}

export default getScore;
