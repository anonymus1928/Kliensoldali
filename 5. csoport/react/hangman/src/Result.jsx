/* eslint-disable react/prop-types */
const Result = ({maxTips, tips}) => {
  const wrong = tips.length;
  return (
    <div id="eredmeny">
      {wrong}/{maxTips}
    </div>
  );
};

export default Result;
