import react, { useState } from "react"

function UseState(){

const initialCount = 0
const [count, setCount] = useState(initialCount)

const incrementFive = () => {
for(let i=0;i<5;i++){
setCount(prevState => prevState + 1)
}
}

const reset=() => setCount(initialCount);

const Increment=() => setCount(count+1);

const Decrement=() => setCount(count-1);

const pStateIncre = prevState => prevState+ 1;

const pStateDecre = prevState => prevState-1;

return(
<div>
Count: {count}
<button onClick={reset}>Reset</button>

<button onClick={Increment}>Increment</button>

<button onClick={Decrement}>Decrement</button> <br/>


<button onClick={() => setCount(pStateIncre)}>Increment by 1</button>

<button onClick={() => setCount(pStateDecre)}>Decrement by 1</button>

<button onClick={incrementFive}>Increment by 5</button>
</div>
)
}

export default UseState