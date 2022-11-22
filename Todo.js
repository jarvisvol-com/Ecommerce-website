import React,{useRef} from 'react'

export default function Todo(props) {
    var inputref = useRef(null)


    const toarrhandler=(e)=>{
        e.preventDefault()
        props.settodos([
          ...props.todos,{id:Math.random()*100,text:props.todo,completed:false}
        ])

        inputref.current.value=''

        console.log("inside function", props.todos);

    }
    
  return (
    <div>
        <label htmlFor='todotext'></label>
        <input id = "todotext" ref = {inputref} type="text" onChange={(e)=>{props.settodo(e.target.value)}}></input>
        <button onClick={toarrhandler} > Create Todo</button>
    </div>
  )
}
