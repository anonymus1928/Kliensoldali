/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { addHaiku, changeText, modifyHaiku, selectEditor, selectHaikus } from "./haikuSlice";

export const Editor = () => {
  const { text, counts, isHaiku } = useSelector(selectEditor);
  const { selectedIndex } = useSelector(selectHaikus);
  const dispatch = useDispatch();
  // console.log(changeText('asdfg'));

  const handleInput = (e) => {
    dispatch(changeText(e.target.value));
  };

  const handleNewHaiku = () => {
    dispatch(addHaiku(text));
  };

  const handleModifyHaiku = () => {
    dispatch(modifyHaiku(text));
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={handleInput}
      ></textarea>
      <p>Vowels per row: {counts.join(",")}</p>
      {isHaiku && <button onClick={handleNewHaiku}>Add</button>}
      {isHaiku && selectedIndex !== null && <button onClick={handleModifyHaiku}>Save</button>}
    </div>
  );
};
