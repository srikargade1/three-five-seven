import { useState } from "react"; 

export default function ThreeGrid()
{
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(true)
    const [three, setThree] = useState(true)

    function handleOne()
    {
        setOne(function(preValue) {
            return !preValue;
        })
    }
    
    function handleTwo()
    {
        setTwo(function(preValue) {
            return !preValue;
        })
    }

    function handleThree()
    {
        setThree(function(preValue){
            return !preValue;
        })
    }

    return (
        <div className="grid">
            <div className="grid-top">
                <button className = {one ? "circle" : "selected"} onClick = {handleOne}></button>
                <button className = {two ? "circle" : "selected"} onClick = {handleTwo}></button>
            </div>
            <div className="grid-bottom">
                <button className = {three ? "circle" : "selected"} onClick = {handleThree}></button>
            </div>
        </div>
    )
}