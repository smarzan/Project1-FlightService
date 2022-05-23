import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Flight from "./models/flight";
import Passenger from "./models/passenger"; 
import ConfirmationNumber from "./models/confirmation";
import APIService from "./services/apiService";
import HomeView from "./views/home/HomeView";
import FlightListView from "./views/flights/FlightListView";
import PassengerListView from "./views/passengers/PassengerListView"; 
import ConfirmationListView from "./views/confirmations/ConfirmationListView"; 

type AppProps = {

};

type AppState = {
  flights: Flight[];
  passengers: Passenger[];
  confirmations: ConfirmationNumber[]; 
}; 

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
      super(props);
      this.state = {
        flights: [],
        passengers: [],
        confirmations: [] 
      }
  }

  componentDidMount() {
    APIService.getFlights()
    .then((response) => {
      this.setState({
        flights: response.data
      });
    })
    .catch((err: Error) => {
      console.log(err);
    });

    APIService.getPassengers()
    .then((response) => {
      this.setState({
        passengers: response.data
      });
    })
    .catch((err: Error) => {
      console.log(err);
    });

    APIService.getConfirmations()
    .then((response) => {
      this.setState({
        confirmations: response.data
      });
    })
    .catch((err: Error) => {
      console.log(err);
    });
  }

  render() {
    return (
      <>  
        <NavigationBar />
        <Routes>
          <Route path="/" element={ <HomeView />} />

          <Route path="/flights/*" element={  
              <FlightListView flights={this.state.flights} />
            } />

          <Route path="/passengers/*" element={           
              <PassengerListView passengers={this.state.passengers} />
          } /> 

          <Route path="/confirmations/*" element={           
              <ConfirmationListView confirmations={this.state.confirmations} />
          } /> 

        </Routes>

      </>
    );
  } 


}

export default App;
