/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { selectHaikus } from "../../state/haikus/selectors";
import { selectHaiku } from "../../state/selectedIndex/actions";

export const HaikuList = () => {
  const dispatch = useDispatch();
  const {haikus} = useSelector(selectHaikus);

  const handleSelectHaiku = i => {
    dispatch(selectHaiku(i));
  }

  const handleRemoveHaiku = () => {
    // dispatch(removeHaiku());
  }

  return (
    <div>
      <h2>Haiku list</h2>
      <div>
        {haikus.map((haiku, i) => (
          <pre key={i} onClick={() => handleSelectHaiku(i)}>{haiku}</pre>
          ))}
          <button onClick={handleRemoveHaiku}>Remove</button>
      </div>
    </div>
  );
};
