import { useState } from "react";

import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Head />
      <Home />
    </>
  );
}

export default App;
