import { useState } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import Content from "./pages/Content";

function App() {
  const [content, setContent] = useState("Home");
  return (
    <>
      <Nav setContent={setContent} />
      <Content content={content} />
    </>
  );
}

export default App;
