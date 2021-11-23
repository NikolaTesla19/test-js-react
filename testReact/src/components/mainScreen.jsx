import React, {useState} from 'react';

const MainScreen = () => {
  const [number, setNumber] = useState(0);
  const [parity, setParity] = useState('Введено чётное число');
  const parityFunc = (value) => {
    if ((value % 2) === 1) {
      setParity('Введено нечётное число');
    } else {
      setParity('Введено чётное число');
    }
  }
  const increment = () => {
    let value = number + 1
    setNumber(value);
    parityFunc(value);
  }
  const decrement = () => {
    if (number > 0) {
      let value = number - 1
      setNumber(value);
      parityFunc(value);
    }
  }
  const reset = () => {
    let value = 0;
    setNumber(value);
    parityFunc(value);
  }
  return(
    <div className="container">
      <div className="number">
      {number}
      </div>
      <div className="parity">
      {parity}
      </div>
      <div className="buttons">
        <div className="button" onClick={decrement}>
          -
        </div>
        <div className="button" onClick={reset}>
          Reset
        </div>
        <div className="button" onClick={increment}>
          +
        </div>
      </div>


    </div>
  )
}

export default MainScreen;
