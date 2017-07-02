import { Provider, connect } from 'react-redux';
import { devTools } from 'redux-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  MessageFilter  from './MessageFilter.jsx';
import './action.js';
import './reduce.js';
import store from './store.js';
import axios from 'axios';



const Message = (props) => <li className="message-item">{props.name}</li>;
class MessageList extends React.Component {

  filter (messages) {
    if (!this.props.filter) {
      return messages
    }
    return messages.filter((message) => message.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
  }
  render () {
    return (
        <ul className="message-list">
          {   this.filter(this.props.messages)
              .map((message) => <Message name={message}></Message>)}

        </ul>
    )
  }
};



class App extends React.Component {

  constructor () {
    super();
    const MESSAGES = ['Elia Larkey','Joyce Bearce','Clint Strahan',
                     'Maude Defrank', 'Soila Hendren', 'Eliana Carrales',
                      'Marquerite Bettes', 'Mikaela Authement', 'Elyse Toscano',
                      'Ginette Solomon', 'Wanita Sprinkle', 'Yen Hagans',
                      'Annmarie Schaper', 'Gregg Wilkins', 'Eura Prue', 'Addie Maddin'];


    this.state = {
      messages: MESSAGES,
      filter: null
    };
  }
    getfilter() {
    axios.get('./MessageFilter').then(response => {
      store.dispatch({
        messages: { },
        filter: null
      });
    });
  };

  updateSearch (inputValue) {
    let filter = this.state.filter;

    this.setState({
      filter: inputValue
    });
  }

  render () {
    return (
      <div className="app">
        <h1 className="app__title">Messages</h1>
        <MessageFilter updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
        <MessageList filter={this.state.filter} messages={this.state.messages}></MessageList>
      </div>
    );
  }
}
const mapStateToProps = function(store) {
  return {
    users: store.messagestate.messages
  };
};
export default App;
//ReactDOM.render(<App />, document.getElementById('root'));
