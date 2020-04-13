import classnames from 'classnames';
import React, { useReducer } from 'react';
import './App.css';
import labels from './labels.json';

const TOGGLE = 'TOGGLE';

function makeInitialState() {
  return {
    cells: labels.map((row) => row.map((label) => ({ checked: false, label }))),
    score: 0,
  };
}

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

function reducer(state, action) {
  if (action.type === TOGGLE) {
    const copy = JSON.parse(JSON.stringify(state.cells));
    const cell = copy[action.indexRow][action.indexCell];
    cell.checked = !cell.checked;
    return {
      ...state,
      cells: copy,
      score: getScore(copy),
    };
  }
  return state;
}

function App() {
  const [{ cells, score }, dispatch] = useReducer(reducer, makeInitialState());

  return (
    <article className="App">
      <h1>Conference Call Bingo</h1>
      <h2>{score}</h2>
      <table>
        <tbody>
          {cells.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map(({ checked, label }, indexCell) => (
                <td
                  className={classnames('App__cell', {
                    'App__cell--on': checked,
                  })}
                  key={indexCell}
                >
                  <input
                    checked={checked}
                    id={`${indexRow}-${indexCell}`}
                    name={`${indexRow}-${indexCell}`}
                    onClick={() =>
                      dispatch({
                        indexCell,
                        indexRow,
                        type: TOGGLE,
                      })
                    }
                    type="checkbox"
                  />
                  <label htmlFor={`${indexRow}-${indexCell}`}>{label}</label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default App;
