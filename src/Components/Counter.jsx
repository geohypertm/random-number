import { Component } from "react";

class Counter extends Component {
  render() {
    const { random } = this.props;

    return (
      <>
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">
          شمارنده : {random}
        </p>
      </>
    );
  }
}

// const Counter = ({random}) => {

//     return (
//         <>
//         <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">شمارنده : {random}</p>
//         </>
//     )
// }

export default Counter;
