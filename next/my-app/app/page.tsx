"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </main>
  );
}
