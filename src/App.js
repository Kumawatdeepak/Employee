import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Regemployee from './components/register_employee';
import Showemployee from './components/show_employee';
import Editemployee from './components/update_employee';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
           <Route exact path="/"><Regemployee/></Route>
           <Route path="/showlist"><Showemployee/></Route>
           <Route path="/editemployee/:id"><Editemployee /></Route>
    

           
        </Switch>
      </div>
    )
  }
}
