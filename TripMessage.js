import React from 'react';
import Diaporama from './Diaporama';

class TripMessage extends React.Component {
   render() {
      return (
        <article class="summary">
           <h2>{this.props.title}</h2>
           <span class="date">{this.props.span}</span>
            <p>{this.props.text}</p>
            <Diaporama />
        </article>
      );
   }
}
export default TripMessage;
