import React from "react";

function Benefit({ figureClass, benefitIcon, label }) {
  return (
    <figure className={figureClass}>
      {benefitIcon}
      <figcaption>{label}</figcaption>
    </figure>
  );
}

// function Button({ buttonClass, label, onClick }) {
//     return (
//       <button className={buttonClass} onClick={() => onClick()}>
//         {label}
//       </button>
//     );
//   }

export default Benefit;
