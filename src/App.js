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
    cells: labels.map((row) => row.map((label) => ({ checked: false, label }))),
    score: 0
  };
}

function reducer(state, action) {
  if (action.type === TOGGLE) {
    const copy = JSON.parse(JSON.stringify(state.cells));
    const cell = copy[action.indexRow][action.indexCell];
    cell.checked = !cell.checked;

    // TODO: decorate the reducer
    ReactGA.event({
      action: action.type,
      category: 'Bingo',
      label: action.label
    });

    return {
      ...state,
      cells: copy,
      score: getScore(copy)
    };
  }
  return state;
}

const initialState = makeInitialState();

function App() {
  const [{ cells, score }, dispatch] = useReducer(reducer, initialState);

  return (
    <article className="App">
      <h1>Conference Call Bingo</h1>
      <h2>{score}</h2>
      {score >= 5 && <h3>Bingo!</h3>}
      <table>
        <tbody>
          {cells.map((row, indexRow) => (
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
