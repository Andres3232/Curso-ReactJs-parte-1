import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ( {values = 10} ) => {

    const [counter,setCounter] = useState(values); // retora u arreglo

    //handleAdd
     const handleAdd = () => {
         //setCounter( (c)=> c + 1 )
         setCounter( counter + 1 )   
     }

     const handleRestar = () => {
        setCounter( counter - 1)
     }

     const handleResetear = () => {
         setCounter( values )
     }

    return(
        
        <>
            <h1>CounterApp</h1>
            <h2> {counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleResetear }>Reset</button>
            <button onClick={ handleRestar}>-1</button>
        </>
    );


}

CounterApp.propTypes = {
    values: PropTypes.number
}

export default CounterApp