/* eslint-disable no-unused-vars */

import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const App = () => {
  // Application state (data)
  const maxTips = 9;
  const word = "alma";
  const tips = ["a", "l", "s"];
  const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

  // Event handlers

  // Computed values

  return (
    <>
      <h1>Hangman</h1>

      <Word word={word} tips={tips} />

      <button>New game</button>
      <Buttons buttonText={buttonText} tips={tips} />

      <Result maxTips={maxTips} tips={tips} />

      <Hangman tips={tips} />
    </>
  );
};

export default App;
