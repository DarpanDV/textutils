import React,{useState} from 'react'
// "use strict";

export default function Textarea() {
  const [text,settext] =useState("Enter the text");
  const [previewstyle,previewnew]=useState({
    visibility:'visible'
  })
  return (
    <>
    <div className="container d-flex justify-content-center my-4 align-items-center bg-danger">
      <h4>Write the para: to ANALYZE</h4>
    </div>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <textarea className="form-control" value={text} onChange={(event)=>{
           settext(event.target.value);
        }} id="exampleFormControlTextarea1" rows="13"></textarea>
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
        console.log(settext);
      }}>UpperCase</button>
          {/* buttton to showcase the Preview content when clicked */}
          <button type="button" class="btn btn-light" onClick={()=>{
              previewnew({
                visibility:'hidden'
              })
          }}>
            Light
            </button>
      <div className='container my-3 d-flex justify-content-center align-items-center'>
      <h1>Preview</h1>
      </div> 
        <div className="container" style={previewstyle}>
          {text}
        </div>
    </>
  )
}


