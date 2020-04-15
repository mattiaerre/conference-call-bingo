import getScore, { getScore1, getScore2 } from './getScore';

const none = [
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false }
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false }
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false }
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false }
  ],
  [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false }
  ]
];

const scenarios = [
  {
    description: 'no marks',
    expected: 0,
    board: JSON.parse(JSON.stringify(none))
  },
  {
    description: '1 mark',
    expected: 1,
    board: (() => {
      const copy = JSON.parse(JSON.stringify(none));
      copy[1][1] = { checked: true };
      return copy;
    })()
  },
  {
    description: '2 marks',
    expected: 2,
    board: (() => {
      const copy = JSON.parse(JSON.stringify(none));
      copy[1][1] = { checked: true };
      copy[2][2] = { checked: true };
      return copy;
    })()
  },
  {
    description: '5 marks',
    expected: 5,
    board: (() => {
      const copy = JSON.parse(JSON.stringify(none));
      copy[0][2] = { checked: true };
      copy[1][0] = { checked: true };
      copy[1][4] = { checked: true };
      copy[3][3] = { checked: true };
      copy[4][4] = { checked: true };
      return copy;
    })()
  },
  {
    description: '25 marks',
    expected: 25,
    board: JSON.parse(JSON.stringify(none).replace(/false/g, 'true'))
  }
];

scenarios.forEach(({ description, expected, board }) => {
  test(description, () => {
    expect(getScore(board)).toEqual(expected);
    expect(getScore1(board)).toEqual(expected);
    expect(getScore2(board)).toEqual(expected);
  });
});
