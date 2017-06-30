import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Message = (props) => <li className="message-item">{props.name}</li>;

class MessageFilter extends React.Component {

  handleChange (event) {
    this.props.updateSearch(event.target.value);
  }

  render () {
    return (
      <input type="text" placeholder="Find" className="input-search" onChange={this.handleChange.bind(this)} value={this.props.searchText} />
    )
  }
}
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
export default App;
//ReactDOM.render(<App />, document.getElementById('root'));
