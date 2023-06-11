import React,{useState} from 'react'

export default function Form (props) {
    const [text,setText] = useState("")

    const handleUpClick =() =>{
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLoClick =() =>{
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }

    const clearText =() =>{
        const newText = ""
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard","success")
    }

    // const removeSpace = ()=>{
    //     let newText = text.split[/[ ]+/]
    //     setText(newText.join(" "))
    // }

    const onChangeHandler =(event) =>{
        console.log("onChange")
        setText(event.target.value)
    }

    return (
    <>
    <div className={`Container text-${props.mode==="light"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={onChangeHandler} rows="8"></textarea>
        <button className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-3 my-2' onClick={handleLoClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-3 my-2' onClick={clearText}>Clear Text</button>
        <button className='btn btn-primary mx-3 my-2' onClick={copyText}>Copy Text</button>
        {/* <button className='btn btn-primary mx-3 my-2' onClick={removeSpace}>Remove Extra Spaces</button> */}
        </div>
    </div>
    <div className={`Container text-${props.mode==="light"?"dark":"light"}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the above box to preview it here"}</p>
    </div>
    </>

  )
}
