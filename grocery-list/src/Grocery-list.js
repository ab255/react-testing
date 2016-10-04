import React, { Component } from 'react';
import Grocery from './Grocery';

export default class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [],
    };
  }
  render() {
    let groceries = this.state.groceries;
    return(
      <div>
        <button className="Clear-Grocery-List" children="Clear" disabled={!this.state.groceries}/>
        {groceries.map(g =>
          <Grocery key={Math.random() * Date.now()} />)
          }
        }
      </div>
    )
  }
}
