//-------VERY--EASY---------------------

// import React, { Component } from 'react'

// export default function basicInfo() {
//   return (
//     <div>
//       <h1>Basic Information</h1>
//       <h3>Name : Benjamin Bennett</h3>
//       <h3>Number : 7041234567</h3>
//       <h3>Date of Birth : 04/19/1996</h3>
//       <h3>Favorite Color : Green</h3>
//     </div>
//   )
// }

//--------EASY---------------------

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             people: 
//                 {
                    
//                 }
            
//         }
//     }


//     render() {

//         return (
//             <div>

//             </div>
//         )
//     }
// }

//---------------MEDIUM--HARD---------------


import React from 'react';

const BasicInfo = ({ person }) => {
  return (
    <div className="basicInfo">
      <h1>Basic Information</h1>
      <h3>Name : {person.Name}</h3> 
      <h3>Number : {person.Number}</h3> 
      <h3>Date of Birth: {person.DateOfBirth}</h3> 
      <h3>Favorite Color : {person.FavoriteColor}</h3> 
    </div>
  );
};

export default BasicInfo

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: [
//         {
//           Name: 'Benji',
//           Number: '123-456-7890',
//           DateOfBirth: '04-19-1997',
//           FavoriteColor: 'Green',
//         },
//         {
//           Name: 'Susan',
//           Number: '132-567-7896',
//           DateOfBirth: '05-13-1987',
//           FavoriteColor: 'Red',
//         },
//         {
//           Name: 'Dan',
//           Number: '435-678-9846',
//           DateOfBirth: '07-23-1978',
//           FavoriteColor: 'Green',
//         },
//         {
//           Name: 'Tomi',
//           Number: '524-987-0990',
//           DateOfBirth: '12-18-2001',
//           FavoriteColor: 'Blue',
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.people.map((person, index) => (
//           <BasicInfo key={index} person={person} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;









