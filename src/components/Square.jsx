import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handeleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handeleClick}>
      {value}
    </button>
  );
}

export default Square;
