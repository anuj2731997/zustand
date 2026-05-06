import { useCounterStore } from "../store/counterStore";


export default function Counter(){

    // const {count,increase,decrease,reset} = useCounterStore();
    const count = useCounterStore(state => state.count);
  const increase = useCounterStore(state => state.increase);
  const decrease = useCounterStore(state => state.decrease);
  const reset = useCounterStore(state => state.reset);
  console.log("Current count in Counter component:", count);
   

    return(
        <div className="counter-container items-center  flex flex-col space-y-4">
            <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
            <div className="buttons space-x-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={increase}>Increase</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={decrease}>Decrease</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={reset}>Reset</button>
            </div>


        </div>
    )
}