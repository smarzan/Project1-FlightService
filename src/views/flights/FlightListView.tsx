import React, { ChangeEvent, MouseEvent} from 'react';
import { createFlight } from "./actions"
import { Button, Form, Modal } from 'react-bootstrap'; 
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Flight from "../../models/flight";

type FlightListViewProps = {
    flights: Flight[];
}

type FlightListViewState = {

}

class FlightListView extends React.Component<FlightListViewProps, FlightListViewState> {
    
     
    // handleNewFlightBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    //     createFlight();
    // }
    
    
    render(): React.ReactNode {
        return (
            <>
                <div className="jumbotron">
                    <h2>Flights</h2>
                </div>
                <>
                    <button>
                        New Flight
                    </button>
                    
                    <button> 
                        Delete Flight
                    </button>
                </>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Flight Number</th>
                            <th>Departure Date</th>
                            <th>Arrival Date</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Departure Airport</th>
                            <th>Arrival Airport</th>
                            <th>Passenger Limit</th>                            
                            {/* <th></th> */}
                        </tr>
                    </thead>    
                    <tbody>
                        {this.props.flights.map( (flight: Flight) =>  (           
                            <React.Fragment key={flight.Id}>
                                <tr id={"flight-"+flight.Id}>
                                    <td>{flight.FlightNumber}</td>
                                    <td>{flight.DepartureDate.split('T')[0]}</td>
                                    <td>{flight.ArrivalDate.split('T')[0]}</td>
                                    <td>{flight.DepartureTime.split('T')[1]}</td>
                                    <td>{flight.ArrivalTime.split('T')[1]}</td>
                                    <td>{flight.DepartureAirport}</td>
                                    <td>{flight.ArrivalAirport}</td>
                                    <td>{flight.PassengerLimit}</td>
                                    {/* <td>
                                        <LinkContainer to={"/flights/" + flight.Id}>
                                            <Nav.Link></Nav.Link>
                                        </LinkContainer>
                                    </td> */}
                                </tr>
                            </React.Fragment>
                        ))}
                  </tbody>
                </table>
            </> 
        )
    }
}

export default FlightListView; 