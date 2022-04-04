import React from 'react';

const Blogs = () => {
    return (
      <div>
        <h1 className="text-5xl text-center font-bold my-7 rounded-xl">
          You can ask any question.
        </h1>
        <div>
          <div className="w-4/5 mx-auto my-4">
            <h1 className="text-2xl font-semibold bg-slate-700 text-white p-4">
              <b>Question:</b> What is context API?
            </h1>
            <p className='bg-slate-300 pl-4 py-5'>
              <b>Answer:</b> The Context API is a React structure that enables
              us to exchange unique details and assists in solving
              prop-drilling from all levels of our application.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;