/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { selectHaikus } from "../../state/haikus/selectors";

export const HaikuList = () => {
  const {haikus} = useSelector(selectHaikus);
  const dispatch = useDispatch();

  const handleClick = i => {
    // dispatch(selectHaiku(i));
  }

  const handleRemoveHaiku = () => {
    // dispatch(removeHaiku());
  }

  return (
    <div>
      <h2>Haiku list</h2>
      <div>
        {haikus.map((haiku, i) => (
          <pre key={i} onClick={() => handleClick(i)}>
            {haiku}
          </pre>
        ))}
        <button onClick={handleRemoveHaiku}>Remove</button>
      </div>
    </div>
  );
};
