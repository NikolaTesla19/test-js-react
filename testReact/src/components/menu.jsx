import React from 'react'


const Menu = (props) => {


  const resetCounters = () => {
    props.numberOfCounters[1](props.numberOfCounters[0].splice());
    props.increase[1](props.increase[0].splice());
    props.summ[1](0);
  }
  const addCounter = async() => {
    let key = Date.now()
    await props.numberOfCounters[1]([...props.numberOfCounters[0], {
      key: key,
      id: key
    }]);


    props.increase[1]([...props.increase[0], props.changeRef.current]);



    for (let i = 0; i < props.increase[0].length; i++) {
        props.increase[0][i].increase();
    }




  }
  return(
    <div className="menu">
      <div className="menuInfoDiv">
        Кол-во счётчиков: {props.numberOfCounters[0].length}
      </div>
      <div className="menuInfoDiv">
        Сумма счётчиков: {props.summ[0]}
      </div>
      <div className="menuButtons">
        <div className="menuButton" onClick={addCounter}>
          +
        </div>
        <div className="menuButton" onClick={resetCounters}>
          Reset
        </div>
      </div>
    </div>
  )
}

export default Menu;
