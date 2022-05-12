import React, { useState } from 'react'

import ResourceList from './ResourceList'

const DisplayData = () => {
    const [resourceName, setresourceName] = useState('posts')


    const postChangeHandler = () => {
        setresourceName('posts')
    }
    const todoChangeHandler = () => {
        setresourceName('comments')
    }

    return (
        <div className='bg-red-500'>
            <div className="text-3xl font-bold underline py-5">Display Data</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded-full' onClick={postChangeHandler}>Posts</button>
            <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={todoChangeHandler}>To Dos</button>
            <ResourceList resourceName={resourceName} />
        </div>
    )
}

export default DisplayData