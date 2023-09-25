import React, { useState } from 'react'
import './Todo.css'
import TodoOutput from './TodoOutput';

const TodoList = () => {
    const [list, setList] = useState("");
    const [itemList, setItemList] = useState([]);

    const listEvent = (event) => {
        setList(event.target.value)
    }
    const addItem = () => {
        setItemList((oldValue) => {
            return [...oldValue, list]
        })
        setList("")
    }

    const deleteList = (id) => {
        // console.log("deleted")
        setItemList((oldValue) => {
            return oldValue.filter((arr, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className='main-container'>
            <div className='container'>
                <h1>Todo-List</h1>
                <input type='text' placeholder='title' value={list} onChange={listEvent} />
                <button className='btn' onClick={addItem}>add</button>
                <br />
                <ol>

                    {itemList.map((value, index) => {
                        return <TodoOutput key={index} id={index} text={value}
                            onSelect={deleteList}
                        />
                    })}
                </ol>
                <br />
            </div>
        </div>
    );
}
export default TodoList;