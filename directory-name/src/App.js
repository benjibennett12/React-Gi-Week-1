import React, { Component } from 'react';
import BasicInfo from './components/basicInfo'; 
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [
          {
            Name: 'Benji',
            Number: '123-456-7890',
            DateOfBirth: '04-19-1997',
            FavoriteColor: 'Green',
          },
          {
            Name: 'Susan',
            Number: '132-567-7896',
            DateOfBirth: '05-13-1987',
            FavoriteColor: 'Red',
          },
          {
            Name: 'Dan',
            Number: '435-678-9846',
            DateOfBirth: '07-23-1978',
            FavoriteColor: 'Green',
          },
          {
            Name: 'Tomi',
            Number: '524-987-0990',
            DateOfBirth: '12-18-2001',
            FavoriteColor: 'Blue',
          },
        ],
      };
    }
  

  render() {
    return (
      <div className="app-container">
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;


