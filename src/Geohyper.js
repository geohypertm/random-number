import { Component } from "react";

import Counter from "./Components/Counter";
import PracticeTailwind from "./Components/Practice-Tailwind";

import "./index.css";
import "./Geohyper.css";

class Geohyper extends Component {
  render() {
    const randomNumber = () => {
      return Math.floor(Math.random() * 10000);
    }
    return (
      <div>
        <h1 className="bg-blue-100 text-blue-800 text-[40px] font-medium p-1 m-2 text-center rounded-md hover:bg-blue-200 transition duration-[0.5s] cursor-default select-none w-[20%] mx-auto">
          شمارنده من
        </h1>
        <hr className="h-[1.5px] text-center w-full rounded-mdS my-8 mx-auto bg-fuchsia-400 border-0 hover:w-5 transition-all duration-[3s]" />

        <Counter random={randomNumber()} />

        <PracticeTailwind />
      </div>
    );
  }
}

// const Geohyper = () => {
//     return (
//        <div>
//          <h1 className="bg-blue-100 text-blue-800 text-[40px] font-medium p-1 m-2 text-center rounded-md hover:bg-blue-200 transition duration-[0.5s] cursor-default select-none w-[20%] mx-auto">شمارنده من</h1>
//          <hr className="h-[1.5px] text-center w-full rounded-mdS my-8 mx-auto bg-fuchsia-400 border-0 hover:w-5 transition-all duration-[3s]"/>

//          <Counter />
//        </div>
//     )
// }

export default Geohyper;
