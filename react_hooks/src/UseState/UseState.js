import React, {useState} from "react";

const UseState = () => {

    let [data, setData] = useState("Enter")
    return(
        <div>
            <h1>UseState</h1>
            <input placeholder="enter to replicate:" onChange={(e) => setData(e.target.value)}></input>
            <h1>{data}</h1>
        </div>
    )
};

export default UseState;