/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { checkSolution, clickCell, getIsSolutionChecked, getLeftNumbers, getSolution, getTable, getTopNumbers, startSolutionCheck, stopSolutionCheck } from "../../state/graphilogicsSlice";
import classNames from "classnames";
import { useEffect } from "react";
import { useGetPuzzlesQuery } from "../../state/graphilogicsApiSlice";

export const GraphiLogics = () => {
  const { isLoading, data } = useGetPuzzlesQuery();
  console.log(data);





  const dispatch = useDispatch();
  const solution = useSelector(getSolution);
  const table = useSelector(getTable);
  const rows = useSelector(getLeftNumbers);
  const cols = useSelector(getTopNumbers);
  const isSolutionChecked = useSelector(getIsSolutionChecked);

  // useEffect(() => {
  //   if(isSolutionChecked) {
  //     const timer = setTimeout(() => {
  //       dispatch(stopSolutionCheck());
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isSolutionChecked]);

  const handleClick = (i, j) => {
    dispatch(clickCell({i, j}));
  }

  const handleCheck = () => {
    if(table.some((row, i) => solution[i] !== row)) {
      // dispatch(startSolutionCheck());
      dispatch(checkSolution());
    } else {
      alert('Nyertél!');
    }
  }

  if(isLoading) {
    return 'Loading...';
  }

  return (
    <>
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  {cols.map((col, i) => (
                    <td key={`cl-${i}`}>
                      {col.map((c, j) => (
                        <span key={`cl-${i}-${j}`}>{c}</span>
                      ))}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                {rows.map((row, i) => (
                  <tr key={`rl-${i}`}>
                    <td>
                      {row.map((c, j) => (
                        <span key={`rl-${i}-${j}`}>{c}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                {table.map((row, i) => (
                  <tr key={`t-${i}`}>
                    {row.split('').map((c, j) => (
                      <td
                        key={`t-${i}-${j}`}
                        className={classNames({
                          feher: c === ' ',
                          fekete: !isSolutionChecked && c === '#' || c === '#' && solution[i][j] === '#',
                          piros: isSolutionChecked && c === '#' && solution[i][j] === ' '
                        })}
                        onClick={() => handleClick(i, j)}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <button onClick={handleCheck}>Ellenőrzés</button>
    </>
  );
};
