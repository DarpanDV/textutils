import React from 'react'

export default function textarea() {
  return (
    <>
    <div className="container d-flex justify-content-center my-4 align-items-center bg-danger">
      <h4>Write the para: to ANALYZE</h4>
    </div>
      <div class="mb-3 d-flex align-items-center justify-content-center">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="13"></textarea>
      </div>
    </>
  )
}
