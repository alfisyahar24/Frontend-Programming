import { useState } from "react";

function Counter() {
  // Membuat variable state
  // Mengembalikan 2 data
  // Nilai saat ini: 0
  // Fungsi untuk mengubah state

  const [hasil, setHasil] = useState(0);

  function tambah() {
    // Jalankan fungsi setHasil
    // Untuk mengubah state
    sethasil(hasil + 1);
  }

  return (
    <div>
      <p>Hasil: {Hasil}</p>
      <button onClick={tambah}>Add</button>
    </div>
  );
}

export default Counter;
