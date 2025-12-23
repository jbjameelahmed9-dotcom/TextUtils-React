import React from 'react'

export default function TextForm() {
  return (
    <div>
        <h1></h1>
        <div class="mb-3" >
        <label for="myBox" class="form-label">Add Text to Analyze</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Uppercase</button>
        {/* <button className="btn btn-primary">Lowercase</button> */}
    </div>
  )
}
