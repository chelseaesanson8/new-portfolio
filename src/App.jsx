import React from 'react';
import Homepage from './components/Homepage';
import BlogApp from './blog/frontend/BlogApp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/blog">
          <BlogApp />
        </Route>

      </Switch>
    </BrowserRouter>


  )
}
export default App
