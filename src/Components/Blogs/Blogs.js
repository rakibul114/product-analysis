import React from 'react';

const Blogs = () => {
    return (
      <div>
        <h1 className="text-5xl text-center font-bold my-8">
          You can ask any question.
        </h1>
        <div>
          <div className="w-4/5 mx-auto my-4 rounded-lg bg-slate-200 p-4">
            <h1 className="text-2xl font-semibold bg-slate-700 text-white p-4 rounded-t-lg">
              <b>Question:</b> What is context API?
            </h1>
            <p className="bg-slate-300 pl-4 py-5 rounded-b-lg">
              <b>Answer:</b> The Context API is a React structure that enables
              us to exchange unique details and assists in solving prop-drilling
              from all levels of our application. The React Context API is a way
              for a React app to effectively produce global variables that can
              be passed around. This is the alternative to "prop drilling" or
              moving props from grandparent to child to parent, and so on.
              Context API is a (kind of) new feature added in version 16.3 of
              React that allows one to share state across the entire app (or
              part of it) lightly and with ease.
            </p>
          </div>
          <div className="w-4/5 mx-auto my-4 rounded-lg bg-slate-200 p-4">
            <h1 className="text-2xl font-semibold bg-slate-700 text-white p-4 rounded-t-lg">
              <b>Question:</b> What is Semantic Tag?
            </h1>
            <p className="bg-slate-300 pl-4 py-5 rounded-b-lg">
              <b>Answer:</b> Semantic HTML tags provide information about the
              contents of those tags that goes beyond just how they look on a
              page. Text that is enclosed in the tag is immediately recognized
              by the browser as some type of coding language. Instead of trying
              to render that code, the browser understands that you are using
              that text as an example of the code for the purposes of an article
              or online tutorial.
            </p>
          </div>
          <div className="w-4/5 mx-auto my-4 rounded-lg bg-slate-200 p-4">
            <h1 className="text-2xl font-semibold bg-slate-700 text-white p-4 rounded-t-lg">
              <b>Question:</b> What is context API?
            </h1>
            <p className="bg-slate-300 pl-4 py-5 rounded-b-lg">
              <b>Answer:</b>
              <br></br>
              <b>Inline Elements:</b> Inline elements don’t start on a new line,
              they appear on the same line as the content and tags beside them.
              When it comes to margins and padding, browsers treat inline
              elements differently. We can add space to the left and right on an
              inline element, but we cannot add height to the top or bottom
              padding or margin of an inline element. Inline elements can
              actually appear within block elements.
              <br></br>
              <b>Inline-Block Elements:</b> Inline-block elements are similar to
              inline elements, except they can have padding and margins added on
              all four sides. We’ll have to declare display: inline-block in
              your CSS code. One common use for using inline-block is for
              creating navigation links horizontally.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;