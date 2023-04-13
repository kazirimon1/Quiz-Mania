import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto border shadow-2xl m-4 p-5'>
            <div className='w-3/5 mx-auto mt-5'>
                <h1 className='text-3xl'>Question: What is purpose of React Router??</h1>
                <p>Answer: React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
            </div>
            <div className='w-3/5 mx-auto mt-5' >
                <h1 className='text-3xl'> Question: How does context api works??</h1>
                <p>Answer: The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
            </div>
            <div className='w-3/5 mx-auto mt-5'>
                <h1 className='text-3xl'> Question: What is useRef() ???</h1>
                <p>Answer: useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
            </div>
        </div>
    );
};

export default Blog;