import { useState } from "react";

function Counter() {
  const [hasil, setHasil] = useState(0);

  function tambah() {
    setHasil(hasil + 1);
  }

  return (
    <div>
      <p>Hasil: {hasil} </p>
      <button>ADD</button>
    </div>
  );
}

export default Counter;
