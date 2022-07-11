
import React, { useState } from 'react'

const BoxGenerator = () => {

    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState("");
    const[boxList, setBoxList] = useState([]);

    const createBox = (e) =>{
        e.preventDefault();
        const newBox ={boxColor, boxSize};
        setBoxList ([newBox, ...boxList]);
        console.log(boxList)
    }  




return (
    <div>
        <form onSubmit={createBox} >

            <div>
                <label>Box Color:</label>
                <input type="text" name="boxColor" 
                onChange = {(e) => setBoxColor(e.target.value)}
                value = {boxColor}></input>
            </div>

            <div>
                <label>Box Size:</label>
                <input type="number"  name="boxSize" 
                onChange={(e) => setBoxSize(parseInt(e.target.value))}
                value = {boxSize}></input>
            </div>

            <button type='submit'> Create Box</button>

        </form>

        <div className='sort'>
        {
            boxList.map((b => 
            <div style={{backgroundColor: b.boxColor, height: b.boxSize, width: b.boxSize}}></div>))
        }
        </div>


    </div>
)
}

export default BoxGenerator
