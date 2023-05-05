/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { changeText, selectEditor } from "./haikuSlice";

export const Editor = () => {
  const {text, counts, isHaiku} = useSelector(selectEditor);
  const dispatch = useDispatch();
  // console.log(changeText('asdfg'));




  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={e => dispatch(changeText(e.target.value))}
      ></textarea>
      <p>Vowels per row: {counts.join(',')}</p>
      <button>Add</button>
      <button>Save</button>
    </div>
  );
};
