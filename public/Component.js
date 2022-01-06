

 function Component() {
    const [currencyValue,setCurrencyValue] = React.useState("");

    handleChange = () => {
        setCurrencyValue(()=>{
            return e.target.value;
        });
    }
    return (
        <div>
            <input onChange={handleChange}></input>
            <h2>{currencyValue}</h2>
        </div>
    )
}

export default Component;