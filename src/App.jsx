import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-white text-black px-4 py-2 m-2 rounded cursor-pointer"
            onClick={() => setColor("white")}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
