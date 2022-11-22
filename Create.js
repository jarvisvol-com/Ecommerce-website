import React from 'react'

export default function Create({todo,todos,settodos}) {
  const deletehandler = (e)=>{
    e.preventDefault()
    settodos(todos.filter((el)=>el.id!==todo.id))


    
  }
  const statushandler=(e)=>{
    e.preventDefault()
    settodos(todos.map((el)=>el.completed=true))

  }
  return (
    <div>
        <p>
            {
              todo.text
            }
        </p>
        <button onClick={statushandler}>Done</button>
        <button onClick={deletehandler}>Delete</button>
    </div>
  )
}
