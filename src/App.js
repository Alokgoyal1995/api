import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })

      });
  }


  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div> Loading </div>;
    }
    else {
      return (
        <div className="App">
          <table>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  name : {item.name} | Email : {item.email} | Username :{item.username}
                  | phone : {item.phone}
                </li>
              ))};
        </ul>
          </table>



        </div>
      );
    }
  }
}

export default App;
