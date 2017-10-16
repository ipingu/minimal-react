import React from 'react';
import TripMessage from './TripMessage'
import Trip from './Trip'
import TripActions from './TripActions'
import SimpleExample from './SimpleExample'

class App extends React.Component {

   render() {
      return (
        <div>
        <SimpleExample />
         <Trip />
        </div>
      );
   }
}
export default App;
