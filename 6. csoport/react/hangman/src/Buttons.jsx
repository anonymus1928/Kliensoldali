/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Buttons = ({buttonText, tips}) => {
  return (
    <div id="betuk">
      {buttonText.split('').map((s, i) => (
        <button key={`${s}-${i}`} disabled={tips.includes(s)}>{s}</button>
      ))}
    </div>
  );
};

export default Buttons;
