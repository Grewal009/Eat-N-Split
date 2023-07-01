import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1 className="text-green-500 text-xl font-bold">
        Initial setup Eat-N-Split
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
