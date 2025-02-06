"use client"
import Image from "next/image";
import Cell from "./Components/Cell";
import { useEffect, useState } from "react";

const winCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
export default function Home() {
  const [cells,Setcells]=useState(Array(9).fill(""));
  const [shape,setShape]=useState("circle");
  const [winMessage,setWinMEssage]=useState("");
  
  useEffect(()=>{
    winCombos.forEach((combo)=>{
      const circleWin=combo.every((c)=>
        cells[c]==="circle"  );
      const crossWin=combo.every((c)=>
        cells[c]==="cross"  );
      if(circleWin)
        setWinMEssage("Circle win !");
      else if(crossWin)
        setWinMEssage("Cross win !");

    })

  },[cells]);
  useEffect(()=>{
    if(cells.every((c)=>(c !== "")) && !winMessage) {
      console.log(".."+winMessage);
      setWinMEssage("Draw!");
    }
  },[cells,winMessage]);
  const handlresetButon=()=>{
      setWinMEssage("");
      setShape("circle");
      Setcells(Array(9).fill(""));
  }
  return (
    <div className="container">
       <div>{winMessage}</div>
       {!winMessage && <div>{shape} : turn now!</div>}
      <div className="gameboard">
        {cells.map((cell,index)=>(
            <Cell key={index} id={index} shape={shape} setShape={setShape}
            cells={cells} Setcells={Setcells}
            winMessage={winMessage}
            />
        ))}
      </div>
      <button className="resetButton" onClick={handlresetButon}>Replay</button>
    </div>
   
  );
}
