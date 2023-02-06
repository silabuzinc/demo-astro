import { useState } from "react";

const Saludar = () => {
  const [saluda, setSaluda] = useState(false);
  return (
    <div>
      {saluda ? <h3>Hola!</h3> : null}
      <button
        onClick={() => {
          setSaluda(!saluda);
        }}
      >
        {saluda ? "No saludar" : "Saludar"}
      </button>
    </div>
  );
};

export default Saludar;
