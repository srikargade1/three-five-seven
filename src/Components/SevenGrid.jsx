import { useState } from "react";

export default function SevenGrid()
{
    const [sevenOne, setSevenOne] = useState(false);
    const [sevenTwo, setSevenTwo] = useState(false);
    const [sevenThree, setSevenThree] = useState(false);
    const [sevenFour, setSevenFour] = useState(false);
    const [sevenFive, setSevenFive] = useState(false);
    const [sevenSix, setSevenSix] = useState(false);
    const [sevenSeven, setSevenSeven] = useState(false);

    const stateMapping = {
        one: setSevenOne,
        two: setSevenTwo,
        three: setSevenThree,
        four: setSevenFour,
        five: setSevenFive,
        six: setSevenSix,
        seven: setSevenSeven
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
                <button className = {sevenOne ? "circle" : "selected"} onClick={() => toggle("one")}></button>
                <button className = {sevenTwo ? "circle" : "selected"} onClick={() => toggle("two")}></button>
                <button className = {sevenThree ? "circle" : "selected"} onClick={() => toggle("three")}></button>
                <button className = {sevenFour ? "circle" : "selected"} onClick={() => toggle("four")}></button>

            </div>
            <div className="grid-bottom">
                <button className = {sevenFive ? "circle" : "selected"} onClick={() => toggle("five")}></button>
                <button className = {sevenSix ? "circle" : "selected"} onClick={() => toggle("six")}></button>
                <button className = {sevenSeven ? "circle" : "selected"} onClick={() => toggle("seven")}></button>
            </div>
        </div>
    )
}