import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ConfirmationNumber from "../../models/confirmation";

type ConfirmationListViewProps = {
    confirmations: ConfirmationNumber[];
}

type ConfirmationListViewState = {

}

class ConfirmationListView extends React.Component<ConfirmationListViewProps, ConfirmationListViewState> {
    render(): React.ReactNode {
        return (
            <>
                <div className="jumbotron">
                    <h2>Bookings</h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Confirmation Number</th>
                            <th>Name</th>
                            <th>Flight Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.confirmations.map( (confirmation: ConfirmationNumber) =>  (           
                            <React.Fragment key={confirmation.Id}>
                                <tr id={"confirmation-"+confirmation.Id}>
                                    <td>{confirmation.Id}</td>
                                    <td>{confirmation.Name}</td>
                                    <td>{confirmation.FlightNumber}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </> 

        ) 
    }
}

export default ConfirmationListView; 