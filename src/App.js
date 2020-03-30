import React from "react";
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <Quote text="To be, or not to be..." author="Hamler" />
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}
