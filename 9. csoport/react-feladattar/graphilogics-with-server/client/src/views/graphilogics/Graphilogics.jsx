import { useDispatch, useSelector } from "react-redux";
import { getLeftNumbers, getSolution, getTable, getTopNumbers } from "../../state/graphilogicsSlice";

export const GraphiLogics = () => {

  const dispatch = useDispatch();
  const solution = useSelector(getSolution);
  const table = useSelector(getTable);
  const rows = useSelector(getLeftNumbers);
  const cols = useSelector(getTopNumbers);
  console.log(solution, table, rows, cols);
  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>

                  <td>
                    <span>1</span>
                    <span>2</span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                <tr>
                  <td>
                    <span>1</span>
                    <span>1</span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span>1</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>2</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                <tr>
                  <td className="feher"></td>
                  <td className="szurke"></td>
                  <td className="fekete"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
