import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import delpic from '../assets/delete.png'
import editpic from '../assets/editing.png'

const Body = () => {
    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState([])

    const handleSave = () =>{
           console.log(todo)
            setAllTodos((allTodos)=>[...allTodos,{id:uuidv4(),task:todo , isCompleted:false}])
           setTodo("")
           console.log(allTodos)
    }

    const handleChange = (e) =>{
       setTodo(e.target.value)
    }

    const handleDelete = (e, del_id) =>{
        let newTodos=(allTodos.filter(item => item.id !== del_id) )
        setAllTodos(newTodos)
    }

    const handleEdit = (e, e_id) =>{
         let t =(allTodos.filter(item => item.id === e_id)) 
         setTodo(t[0].task)
         let newTodos=(allTodos.filter(item => item.id !== e_id) )
        setAllTodos(newTodos)

    }

    const handleCheck = (e) =>{
        let check_id = e.target.name;
          let index = allTodos.findIndex(item => item.id === check_id);
          let newTodos=[...allTodos];
         newTodos[index].isCompleted=!newTodos[index].isCompleted;
         setAllTodos(newTodos);
    }

  return (
    <div className='max-w-4xl mx-auto p-4 mt-10 bg-indigo-300'>
        {/* heading */}
      <h1 className='text-center font-medium text-3xl'>TODO LIST</h1>
      {/* input box and button  */}
       <div className="flex max-w-3xl mx-auto space-x-8 p-4">
        <input placeholder="Enter your todo" onChange={handleChange} value={todo}  type="text" className='w-2/3 border-2 border-indigo-100' />
        <button  onClick={handleSave} className='font-medium rounded-md bg-indigo-500 p-2'>Save</button>
        <button className='w-10 h-10 rounded-full font-medium bg-indigo-500'>DRK</button>
       
</div>
<div className="max-w-3xl mt-5 p-4">
    <h2 className="text-2xl font-medium">Your todos</h2>
   <div>
    {allTodos.map((item)=>(
        <div key={item.id} className='flex justify-between  my-2'>
        <div className='flex space-x-4'>
            <input type="checkbox" name={item.id} value={item.isCompleted} onChange={handleCheck} className='w-4 h-8' />
            <label className={item.isCompleted?"line-through":""}>{item.task}</label>
        </div>
        <div className='flex space-x-4'>
            <button onClick={(e)=>handleEdit(e,item.id)} className='font-medium rounded-md bg-indigo-500 p-2'><img src={editpic} name={item.id} className='w-6' alt="icon" /></button>
            <button  onClick={(e)=>handleDelete(e, item.id)} className='font-medium rounded-md bg-indigo-500 p-2'><img src={delpic} name={item.id} className='w-6' alt="icon" /></button></div>
        </div>
    ))}
   </div>
</div>
    </div>
  )
}

export default Body
