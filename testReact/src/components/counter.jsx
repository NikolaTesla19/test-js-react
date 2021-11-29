import React, {useState, forwardRef, useImperativeHandle} from 'react';

const Counter = forwardRef((props, ref) => {


  const [number, setNumber] = useState(0);

  const [parity, setParity] = useState('Введено чётное число');
  const [background, setBackground] = useState({background: 'green'});

  const parityFunc = (value) => {
    if ((value % 2) === 1) {
      setParity('Введено нечётное число');
      setBackground({background: 'red'});
    } else {
      setParity('Введено чётное число');
      setBackground({background: 'green'});
    }
  }
  let [increase, setIncrease] = useState(false);
  let [decrease, setDecrease] = useState(false);
  useImperativeHandle(ref, () => ({
    id: props.id,
    increase() {
      setIncrease(true)
    },
    decrease() {
      setDecrease(true)
    }
  }));

  const remove = () => {
    props.summ[1](props.summ[0] - number);
    props.remove(props.id);

  }
  const increment = () => {

    let value = number + 1
    setNumber(value);
    parityFunc(value);
    props.summ[1](props.summ[0] + 1);

  }
  const decrement = () => {
    if (number > 0) {
      let value = number - 1
      setNumber(value);
      parityFunc(value);
      props.summ[1](props.summ[0] - 1);
    }
  }
  const reset = () => {
    let value = 0;
    setNumber(value);
    parityFunc(value);
    props.summ[1](props.summ[0] - number);
  }
  if (increase) {
    setIncrease(false)
    if (number % 2 === 0) {
      increment()
    }
  }
  if (decrease) {
    setDecrease(false)
    if (number % 2 === 1) {
      decrement()
    }
  }
  return(
    <div className="container" style={background}>
      <div className="number" >
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
        <div className="button" onClick={remove}>
          Remove
        </div>
      </div>


    </div>
  )
})

export default Counter;
