import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <div>
            <li className='todoItem'>
                {children}
                <div className='actionsContainer'>
                    <button onClick={() => {
                        handleEditTodo(index)
                    }}>
                        <i className="fa-solid fa-pen"></i>
                    </button>
                    <button onClick={() => {
                        handleDeleteTodo(index)
                    }}>
                        <i className="fa-solid fa-circle-minus"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}
