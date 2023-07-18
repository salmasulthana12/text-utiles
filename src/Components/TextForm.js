import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper case','success')
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower case','success')
  };

  const handleClear = () =>{
    setText('');
    props.showAlert('Text cleared','success')
  }

  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces are removed','success')
  }

  return (
    <>
      <div style={{color:props.mode==='light'? '#042743':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Enter text here"
            style={{backgroundColor:props.mode==='light'? 'white':'#13466e',color:props.mode==='light'? '#042743':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
         Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==='light'? '#042743':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>element.length!==0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0? text:'Enter something in the textbox above to preview it'}</p>
      </div>
    </>
  );
};

export default TextForm;
