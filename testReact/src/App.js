import React, {useState, useRef, useEffect} from 'react';
import './styles/style.css';
import Menu from './components/menu';
import Counter from './components/counter';
const App = () => {
  const [increase, setIncrease] = useState([])
  const [counters, setcounters] = useState([]);
  const [summ, setSumm] = useState(0);

  const changeRef = useRef();

  const remove = async (id) => {
    setcounters(counters.filter((el) => id !== el.id));

    setIncrease(increase.filter((el) => id !== el.id));

    for (let i = 0; i < increase.length; i++) {
      await increase[i].decrease();
    }
  }
  return (
    <div>
      <Menu
        numberOfCounters={[counters, setcounters]}
        summ={[summ, setSumm]}
        changeRef={changeRef}
        increase={[increase, setIncrease]}
      />
      {counters.map(counters =>
        <Counter
          id={counters.id}
          ref={changeRef}
          key={counters.key}
          remove={remove}
          summ={[summ, setSumm]}
        />
      )}

    </div>


  );
}

export default App;
