import React from 'react'

const Input = () => {
    return (
        <div
            className='task'>
           <h2 className='task'>Task Name</h2>
           <form>
                <label>Enter Task here! </label>
                <input
                 type="text"
                 required
                />
           </form>
        </div>
    )
}


export default Input