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
  let score = 0;
  for (let i = 0; i < marks.length; i += 1) {
    for (let j = 0; j < marks[i].length; j += 1) {
      if (marks[i][j].checked) {
        score += 1;
      }
    }
  }
  return score;
}

export default getScore;
