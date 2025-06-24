import { useState } from "react";

export default function FiveGrid()
{
    const [fiveOne, setFiveOne] = useState(false);
    const [fiveTwo, setFiveTwo] = useState(false);
    const [fiveThree, setFiveThree] = useState(false);
    const [fiveFour, setFiveFour] = useState(false);
    const [fiveFive, setFiveFive] = useState(false);

    const stateMapping = {
        one: setFiveOne,
        two: setFiveTwo,
        three: setFiveThree,
        four: setFiveFour,
        five: setFiveFive
    }

    function toggle(name)
    {

        stateMapping[name](
            function(preValue)
            {
                return !preValue;
            }
        );

    }

    return (
        <div className="grid">
            <div className="grid-top">
                <button className = {fiveOne ? "circle" : "selected"} onClick = {() => toggle("one")}></button>
                <button className = {fiveTwo ? "circle" : "selected"} onClick = {() => toggle("two")}></button>
                <button className = {fiveThree ? "circle": "selected"} onClick = {() => toggle("three")}></button>
            </div>
            <div className="grid-bottom">
                <button className = {fiveFour ? "circle": "selected"} onClick = {() => toggle("four")}></button>
                <button className = {fiveFive ? "circle": "selected"} onClick = {() => toggle("five")}></button>
            </div>
        </div>
    )
}