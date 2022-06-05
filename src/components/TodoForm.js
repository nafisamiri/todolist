import React, {useState ,useEffect,useRef} from 'react';


function TodoForm({edit, onSubmit}) {
    const [input , setInput] = useState(edit ? edit.value : " ")

    const inputRef = useRef(null)
    
    useEffect(()=>{
        inputRef.current.focus()
    })


    const handleChange = e =>{
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
          id:Math.floor (Math.random() * 10000), 
          text:input

        })
    
    setInput('');
}
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? (
            <>
            <input 
            type="text"
            placeholder="update form "
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button edit">Edit</button>
            </>
            ):
            ( 
           <> 
            <input 
                type="text"
                placeholder="Lemme keep It"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="todo-button">Add todo</button>
                </>
                
                )}
                
            
        </form>
    )
}

export default TodoForm
