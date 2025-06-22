import { useState } from "react";

export default function FiveGrid()
{
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);

    const stateMapping = {
        one: setOne,
        two: setTwo,
        three: setThree,
        four: setFour,
        five: setFive
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
                <button className = {one ? "circle" : "selected"} onClick = {() => toggle("one")}></button>
                <button className = {two ? "circle" : "selected"} onClick = {() => toggle("two")}></button>
                <button className = {three ? "circle": "selected"} onClick = {() => toggle("three")}></button>
            </div>
            <div className="grid-bottom">
                <button className = {four ? "circle": "selected"} onClick = {() => toggle("four")}></button>
                <button className = {five ? "circle": "selected"} onClick = {() => toggle("five")}></button>
            </div>
        </div>
    )
}