import React from 'react';
import TripMessage from './TripMessage'
import TripActions from './TripActions'
import WriteSummary from './WriteSummary'

class Trip extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        messages: [],
        showSummary: true
      };
  }

  componentDidMount() {
 const text = "Odavno je uspostavljena činjenica da čitača ometa razumljivi tekst dok gleda raspored elemenata na stranici. Smisao korištenja Lorem Ipsum-a jest u tome što umjesto 'sadržaj ovjde, sadržaj ovjde' imamo normalni raspored slova i riječi, pa čitač ima dojam da gleda tekst na razumljivom jeziku. Mnogi programi za stolno izdavaštvo i uređivanje web stranica danas koriste Lorem Ipsum kao zadani model teksta, i ako potražite 'lorem ipsum' na Internetu, kao rezultat dobit ćete mnoge stranice u izradi. Razne verzije razvile su se tijekom svih tih godina, ponekad slučajno, ponekad namjerno (s dodatkom humora i slično).";

    this.setState({
      messages: [
        <TripMessage title="Message 1" span="Few hours" text={text}/>,
        <TripMessage title="Message 2" span="Two days" text={text}/>]
    });
  }

  handleClick() {
    const messages = this.state.messages.concat(<TripMessage title="Message xx" />);
    this.setState( {
      messages: messages
    })
  }

   render() {
      return (
         <div>
          <TripActions handleClickWriteSummary={this.handleClickWriteSummary}/>
          {this.state.showSummary && <WriteSummary /> }
          {this.state.messages}
         </div>
      );
   }
}
export default Trip;
