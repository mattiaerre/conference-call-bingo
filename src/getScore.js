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

function getScore(cells) {
  return cells.reduce((score, row) => {
    // eslint-disable-next-line no-param-reassign, no-return-assign
    return (score += row.reduce((accumulator, current) => {
      return current.checked ? accumulator + 1 : accumulator;
    }, 0));
  }, 0);
}

export default getScore;
