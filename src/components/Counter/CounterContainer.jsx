import { useState } from "react";
import CounterPresentation from "./CounterPresentacion";

const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);
  
  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : alert("Supera la cantidad disponible");
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
