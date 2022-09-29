import React from "react";

const Questions = () => {
  return (
    <div className="container m-auto my-10">
      <h1 className="text-3xl font-semibold my-3">how does react work?</h1>
      <p>
        React is a declarative, efficient, and flexible JavaScript library for
        building user interfaces. 'V' denotes the view in MVC. ReactJS is an
        open-source, component-based front end library responsible only for the
        view layer of the application. It is maintained by Facebook.
      </p>
      <h1 className="text-3xl font-semibold my-3">
        what is difference between props and state in react?
      </h1>
      <p>
        Props are read-only components. It is an object which stores the value
        of attributes of a tag and work similar to the HTML attributes. It
        allows passing data from one component to other components. It is
        similar to function arguments and can be passed to the component the
        same way as arguments passed in a function. Props are immutable so we
        cannot modify the props from inside the component. <br />
        The state is an updatable structure that is used to contain data or
        information about the component and can change over time. The change in
        state can happen as a response to user action or system event. It is the
        heart of the react component which determines the behavior of the
        component and how it will render.
      </p>
      <h1 className="text-3xl font-semibold my-3">useeffect works in react</h1>
      <p>
        What does useEffect do? By using this Hook, you tell React that your
        component needs to do something after render. React will remember the
        function you passed (we'll refer to it as our “effect”), and call it
        later after performing the DOM updates.By default useEffect will trigger
        anytime an update happens to the React component. This means if the
        component receives new props from its parent component or even when you
        change the state locally, the effect will run again.
      </p>
    </div>
  );
};

export default Questions;
