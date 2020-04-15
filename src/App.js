import classnames from 'classnames';
import React, { useReducer } from 'react';
import ReactGA from 'react-ga';
import { version } from '../package.json';
import './App.css';
import getScore from './getScore';
import labels from './labels.json';

const TOGGLE = 'TOGGLE';

function makeInitialState() {
  return {
    board: labels.map((row) => row.map((label) => ({ checked: false, label }))),
    score: 0
  };
}

function reducer(state, action) {
  if (action.type === TOGGLE) {
    const copy = JSON.parse(JSON.stringify(state.board));
    const cell = copy[action.indexRow][action.indexCell];
    cell.checked = !cell.checked;

    // TODO: decorate the reducer
    ReactGA.event({
      action: action.type,
      category: 'Bingo',
      label: action.label,
      value: cell.checked ? 1 : 0
    });

    return {
      ...state,
      board: copy,
      score: getScore(copy)
    };
  }
  return state;
}

const initialState = makeInitialState();

function App() {
  const [{ board, score }, dispatch] = useReducer(reducer, initialState);

  return (
    <article className="App">
      <h1 className="App__h1">Conference Call Bingo</h1>
      <table>
        <thead>
          <tr>
            {'Bingo'.split('').map((character, index) => (
              <td
                className={classnames('App__cell-head', {
                  'App__cell-head--on': index < score
                })}
              >
                {character}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {board.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map(({ checked, label }, indexCell) => (
                <td
                  className={classnames('App__cell', {
                    'App__cell--on': checked
                  })}
                  key={indexCell}
                >
                  <input
                    checked={checked}
                    className="App__checkbox"
                    id={`${indexRow}-${indexCell}`}
                    name={`${indexRow}-${indexCell}`}
                    onChange={() =>
                      dispatch({
                        indexCell,
                        indexRow,
                        label,
                        type: TOGGLE
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
      <footer className="App__footer">v{version}</footer>
    </article>
  );
}

export default App;
