import React, { Dispatch, SetStateAction, useState } from 'react'

type CellProps={
  id:number;
  shape: string;
  setShape: Dispatch<SetStateAction<string>>
  cells:string[];
  Setcells: Dispatch<SetStateAction<string[]>>
  winMessage:string;

}

const Cell = ({shape,setShape,id,cells,Setcells,winMessage}:CellProps) => {

  const handlClick=(e)=>{
    if(winMessage)
      return
    if(!cells[id]){
         if(cells[id]==""){
      if(shape=="circle"){
        handCellChange(shape);
        setShape("cross");
      }
      else {
        handCellChange(shape);
        setShape("circle");
      }
    }
    }
  }
  const handCellChange=(CellchangeVal:string)=>{
    let copyCells=[...cells];
    copyCells[id]=CellchangeVal;
    Setcells(copyCells);
  }
  return (
       <div className='square' onClick={handlClick}>
        <div className={cells[id]}>{cells[id] ? (cells[id]=="circle"? "O": "X"): ""}</div>
       </div>
   
  )
}

export default Cell