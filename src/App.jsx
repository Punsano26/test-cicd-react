import './App.css';

import {
  useEffect,
  useState,
} from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    inputValue === "hello" ? alert("Hello to you too!") : null;
  }, [inputValue]);
  return (
    <>
      <div className='p-6'>
        <div className="grid grid-cols-4">
          <h1 className="text-lg font-bold text-customblue">custom blue</h1>
          <h1 className="text-lg font-bold text-custompink">custom pink</h1>
          <h1 className="text-lg font-bold text-customblue">custom blue</h1>
          <h1 className="text-lg font-bold text-custompink">custom pink</h1>
          <h1 className="text-lg font-bold text-customblue">custom blue</h1>
          <h1 className="text-lg font-bold text-custompink">custom pink</h1>
          <h1 className="text-lg font-bold text-customblue">custom blue</h1>
          <h1 className="text-lg font-bold text-custompink">custom pink</h1>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            className="input"
          />
        </div>
      </div>
    </>
  );
}

export default App;
