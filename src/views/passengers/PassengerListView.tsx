import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Passenger from "../../models/passenger";

type PassengerListViewProps = {
    passengers: Passenger[];
}

type PassengerListViewState = {

}

class PassengerListView extends React.Component<PassengerListViewProps, PassengerListViewState> {
    render(): React.ReactNode {
        return (
            <>
                <div className="jumbotron">
                    <h2>Passengers</h2>
                </div>
                <table className="table table-striped table-bordered table-hover table-highlight">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.passengers.map( (passenger: Passenger) =>  (           
                            <React.Fragment key={passenger.Id}>
                                <tr id={"passenger-" + passenger.Id}>
                                    <td>{passenger.Id}</td>
                                    <td>{passenger.Name}</td>
                                    <td>{passenger.Job}</td>
                                    <td>{passenger.Email}</td>
                                    <td>{passenger.Age}</td>
                                    <td>
                                        <LinkContainer to={"/passengers/" + passenger.Id}>
                                            <Nav.Link className="btn btn-primary">
                                                Edit
                                            </Nav.Link>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </> 

        ) 
    }
}

export default PassengerListView; 