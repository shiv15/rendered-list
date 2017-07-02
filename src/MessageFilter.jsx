import React from 'react';
import ReactDOM from 'react-dom';

class MessageFilter extends React.Component {

  handleChange (event) {
    this.props.updateSearch(event.target.value);
  }

  render () {
    return (
      <input type="text" placeholder="Find" className="input-search" onChange={this.handleChange.bind(this)} value={this.props.searchText} />
    )
  }
};
ReactDOM.render(<MessageFilter />, document.getElementById('root'));
export default MessageFilter;
