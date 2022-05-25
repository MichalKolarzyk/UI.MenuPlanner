import React from "react";

function App() {
    const submitHadler = (event: any, message: string) => {
        if (event) {
            event.preventDefault();
        }
        console.log(event.target);
    };


    const changeHandler = (event: any) => {
        console.log(event.target);
    };


    return (
        <form onSubmit={(event:any) => submitHadler(event, "st")}>
            <div>
                <input onChange={changeHandler} name="numberOfGuests1" type="number"></input>
                <input onChange={changeHandler} name="numberOfGuests2" type="number"></input>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default App;
