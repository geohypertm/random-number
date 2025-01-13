import { Component } from "react"; 

class Counter extends Component {

  static defaultProps = {
    count: 45
  }
  render() {

    const {random, number, count} = this.props;
    const {children} = this.props

    return (
      <>
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">
          شمارنده : {random}
        </p>
        <br />
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">{children}</p>
        <br />
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">{number}</p>
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">{count}</p>

        <div className="shadow-xl shadow-green-400 p-12 m-5">Lorem ipsum dolor sit amet consectetur.</div>
      </>
    );
  }
}

// const Counter = (props) => {

//     return (
//         <>
//         <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">شمارنده : {props.random}</p>
//         <p>{props.count || 420}</p>
//         <br />
//         </>
//     )
// }


// Counter.defaultProps = {
//   count: 120
// }

export default Counter;
