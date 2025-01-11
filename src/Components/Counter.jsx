const Counter = () => {

    return (
        <>
        <p className="text-center m-auto bg-blue-100 text-stone-500 font-medium text-[40px] rounded-md w-[20%] p-2">شمارنده : {Math.floor(Math.random() * 1000)}</p>
        </>
    )
}

export default Counter;
