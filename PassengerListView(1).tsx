import React, {ChangeEvent, MouseEvent} from 'react';
import axios from "axios"; 
import {Button, Form, Modal} from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {Passenger, PassengerToUpdate} from "../../models/passenger";
import APIService from "../../services/apiService"; 

type PassengerListViewProps = {
    passengers: Passenger[];
}

type PassengerListViewState = {
        Id: number,
        Name: string, 
        Job: string, 
        Email: string, 
        Age: number,
        showEditForm: boolean 
}

interface PassengerDetailsParams{
    passengerId: string;
}

class PassengerListView extends React.Component<PassengerListViewProps, PassengerListViewState> {
    
    componentDidMount(){
        APIService.getPassenger(this.state.Id as unknown as number)
        .then((response) => {
            let s = response.data;
            this.setState({
                Id: s.Id,
                Name: s.Name,
                Job: s.Job,
                Email: s.Email,
                Age: s.Age,
                showEditForm: false
            });
        })
    }

    handleEditBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
        this.setState({
            showEditForm: true
        });
    }

    handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Name: event.target.value
        });
    }

    handleJobChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Job: event.target.value
        });
    }

    handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Email: event.target.value
        });
    }

    handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Age: parseInt(event.target.value)
        });
    }

    handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let passengerChanged: PassengerToUpdate = {
            Id: this.state.Id, 
            Name: this.state.Name,
            Job: this.state.Job,
            Email: this.state.Email,
            Age: this.state.Age
        };
        this.handleUpdateModel(passengerChanged);
        this.handleCloseClick();
    }

    handleSaveChangesClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let passengerChanged: PassengerToUpdate = {
            Id: this.state.Id,
            Name: this.state.Name,
            Job: this.state.Job,
            Email: this.state.Email,
            Age: this.state.Age
        };
        this.handleUpdateModel(passengerChanged);
        this.handleCloseClick();
    }
    
    handleCloseClick = () => {
        this.setState({
            showEditForm: false
        });
    }

    handleUpdateModel = (passenger: PassengerToUpdate) => {
        APIService.updatePassenger(passenger)
        .then((response) => {
            let p = response.data;
            this.setState({
                Id: p.Id,
                Name: p.Name,
                Job: p.Job,
                Email: p.Email,
                Age: p.Age
            });
        }).catch((err) => {
            console.log(err);
        });
    }


    render(): React.ReactNode {
        return (
            <>
                <div className="jumbotron">
                    <h2>Passengers</h2>
                    <button>New Passenger</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Occupation</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th><Button className="btn btn-primary" onClick={this.handleEditBtnClick}>Edit</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.passengers.map( (passenger: Passenger) =>  (           
                            <React.Fragment key={passenger.Id}>
                                <tr id={"passenger-"+passenger.Id}>
                                    <td>{passenger.Name}</td>
                                    <td>{passenger.Job}</td>
                                    <td>{passenger.Email}</td>
                                    <td>{passenger.Age}</td>

                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                <Modal show={this.state.showEditForm} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Edit Passenger</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" value={this.state.Name} onChange={this.handleNameChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="job">
                                <Form.Label>Occupation:</Form.Label>
                                <Form.Control type="text" value={this.state.Job} onChange={this.handleJobChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="text" value={this.state.Email} onChange={this.handleEmailChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="text" value={this.state.Age} onChange={this.handleAgeChange} />
                            </Form.Group>
                        </Form>
                        

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleCloseClick}>Close</Button>
                        <Button variant='primary' onClick={this.handleSaveChangesClick}>Save</Button>
                    </Modal.Footer>

                </Modal>
            </> 

        ) 
    }
}

export default PassengerListView; 