import React, { useState } from 'react';

export default function TextFile(props) {
  const [text, settext] = useState("");
  const [preview, setpreview] = useState("Enter text to preview")
  function textset(obj) {
    settext(obj.target.value);
    setpreview(obj.target.value.trim());
  }
  function toUpper() {
    settext(text.toUpperCase());
    setpreview(text.toUpperCase());
    props.showAlert("Text converted to uppercase","Success: ");
  }
  function toLower() {
    settext(text.toLowerCase());
    setpreview(text.toLowerCase());
    props.showAlert("Text converted to Lowercase","Success: ");
  }
  function clear() {
    settext("");
    setpreview("Enter text to preview");
    props.showAlert("Text cleared","Success: ");
  }
  return props.style && (
    <div className="container" style={props.style}>
      <div className="mb-3 ml-3 mr-3">
        <h1>Enter your text here</h1>
        <textarea className="form-control" id="mytext" rows="3" onChange={textset} value={text}></textarea>
        <button className="btn btn-primary my-3" onClick={toUpper}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={toLower}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={clear}>Clear</button>
        <p>{text.length} characters ,{text === "" ? 0 : (text.endsWith(" ") ? text.split(" ").length - 1 : text.split(" ").length)} words and {((text === "" ? 0 : (text.endsWith(" ") ? text.split(" ").length - 1 : text.split(" ").length)) * 0.3).toPrecision(3)}min read</p>
        <h3>Preview</h3>
        <p>{preview}</p>
      </div>
    </div>
  )
}
