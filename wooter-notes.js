// Then, you could immediately start implementing the router. Import both <Link> and <Route> component from the wouter package, then create a Link with href prop and a Route component with the matching path:

import React from 'react';
import { Link, Route } from "wouter";

const App = () => (
  <div>
    <h1>Application</h1>
    <Link href="/users/JohnDoe">
      <a className="link">Profile</a>
    </Link>
    <Route path="/users/:username">
      {(params) => <div>Hello, {params.username}!</div>}
    </Route>
  </div>
);
export default App;

// the useRoute hook is used to determine if the current browser URL matches the provided path

// The hook can be used to replace theRoute component. 

import { useRoute } from "wouter";
const UserRoute = () => {
  // `match` is boolean
  const [match, params] = useRoute("/users/:username");
  if(match){
    return <div>Hello, {params.username}!</div>
  }
  return null
};

// Next, the useLocation hook is a wrapper around the native browser history API. It allows you to manipulate the current browser location:


import { useLocation } from "wouter";

const CurrentLocation = () => {
  const [location, setLocation] = useLocation();

  return (
    <div>
      {`The current page is: ${location}`}
      <a onClick={() => setLocation("/somewhere")}>Click to update</a>
    </div>
  );
};

// Wouter’s component-based API is similar to React Router’s but much simpler. The <Route> component is used for conditionally rendering a component when the current route matches its path pattern, as you’ve seen before:
