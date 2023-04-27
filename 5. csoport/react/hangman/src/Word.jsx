/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import cn from "classnames";
import Letter from "./Letter";

const Word = ({word, tips}) => {
  const won = false;
  return (
    <div id="szo" className={cn({ nyer: won })}>
      {word.split('').map((s, i) => (
        <Letter key={i} visible={tips.includes(s)} missing={false}>
          {s}
        </Letter>
      ))}
    </div>
  );
};

export default Word;
