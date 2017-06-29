import React from 'react';
import ReactDOM from 'react-dom';
import ReactList from 'react-custom-list';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.resetItems = this.resetItems.bind(this);
  }

  resetItems(event) {
    event.preventDefault();

    this.reactList.setItems([
      {
        name: 'Item 1',
        place: 'Alibag'
     },
      { name: 'Item 2',
         place: 'Pune'
     },
      { name: 'Item 3',
        place: 'Alibag' }
    ]);
  }

  render() {
    return (
      <div>
        <ReactList className="space"
          initialItems={[
            {
              name: 'Item 1',
              place: 'Alibag'
            }
           ,
           {
            name: 'Item 2',
            place: 'Pune'
          }
            ,
          {
           name: 'Item 3',
           place: 'Alibag'
         }
          ]}
          showItemSearch
          itemSearchPredicate={
            (item, query) =>
            item.name.toLowerCase().startsWith(query.toLowerCase()) ||
            item.place.toLowerCase().startsWith(query.toLowerCase())
          }
          onItemSearch={
            (query, allItems, filteredItems) => {
              console.log(query);
              console.log(allItems);
              console.log(filteredItems);
            }
          }
          ref={(ref) => { this.reactList = ref; }}
        />
        <button className="button" onClick={this.resetItems}>Reset Items</button>
      </div>
    );
  }
}
export default App;

/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactList from 'react-custom-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/
