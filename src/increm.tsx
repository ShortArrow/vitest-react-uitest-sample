import { useState } from "react";

export function Increm() {
  const [number, setNumber] = useState(0);
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setNumber(number + 1);
  };
  return (
    <div className="Increm">
      <p>{number}</p>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}
