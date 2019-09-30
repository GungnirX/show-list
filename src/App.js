import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsToRender: 5,
      isExpanded: false
    };
  }

  componentDidMount() {
    const arr = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
    this.setState({
      items: arr
    });
  }

  showMore = () => {
    this.setState({
      itemsToRender: 10,
      isExpanded: true
    });
  }

  showLess = () => {
    this.setState({
      itemsToRender: 5,
      isExpanded: false
    });
  }

  render() {
    const { items, itemsToRender, isExpanded } = this.state;

    return(
      <div>
        <ul>
        {items.slice(0, itemsToRender).map((item, index) => {
          return(
            <li key={index}>{item}</li>
          );
        })}
        </ul>

        {isExpanded ? 
          <button onClick={this.showLess}>Show Less</button> :
          <button onClick={this.showMore}>Show More</button>}
      </div>
    );
  }
}

export default App;
