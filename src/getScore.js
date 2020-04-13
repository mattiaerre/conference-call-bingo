/*
const data = [
  [false, false, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [true, false, false, true, false],
  [false, true, false, false, false],
];
 */

function getScore(cells) {
  return cells.reduce((score, row) => {
    // eslint-disable-next-line no-param-reassign, no-return-assign
    return (score += row.reduce((rowScore, current) => {
      if (current.checked) {
        // eslint-disable-next-line no-param-reassign
        rowScore += 1;
      }
      return rowScore;
    }, 0));
  }, 0);
}

export default getScore;
