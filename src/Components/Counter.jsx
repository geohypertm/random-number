// import { Component } from "react";
import { useState } from "react";

// class Counter extends Component {
//   state = { count: 0 };

//   increase = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block" onClick={this.increase}> {count} روش کلیک کن تا اضافه بشه</button>
//     );
//   }
// }

const Counter = () => {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  return (
    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center block m-auto select-none" onClick={increase}> {count} روش کلیک کن تا اضافه بشه</button>
  )
}



export default Counter;
