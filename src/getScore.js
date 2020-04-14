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

function getScore(marks) {
  return marks.reduce((score, row) => {
    return (
      score +
      row.reduce((counter, mark) => {
        return counter + (mark.checked ? 1 : 0);
      }, 0)
    );
  }, 0);
}

export default getScore;
