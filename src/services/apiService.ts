import Flight from '../models/flight'; 
import Passenger from '../models/passenger';
import ConfirmationNumber from '../models/confirmation';
import axios from "axios"; 

const http = axios.create({
    baseURL: "https://localhost:7170",
    headers: {
        'Content-Type': 'application/json'
    }
});

const getFlights = () => {
    return http.get<Array<Flight>>("/api/Flights"); 
};

const getFlight = (id: number) => {
    return http.get<Flight>(`api/Flights/${id}`); 
}; 

const createFlight = (flight: Flight) => {
    return http.post<Flight>("api/Flights", flight);
};

const updateFlight = (flight: Flight) => {
    return http.put<Flight>(`api/Flights/${flight.Id}`, flight);
};

const deleteFlight = (id: number) => {
    return http.delete<Flight>(`api/Flights/${id}`);
};


const getPassengers = () => {
    return http.get<Array<Passenger>>("/api/Passengers"); 
};

const getPassenger = (id: number) => {
    return http.get<Passenger>(`api/Passengers/${id}`); 
}; 

const createPassenger = (passenger: Passenger) => {
    return http.post<Passenger>("api/Passengers", passenger);
};

const updatePassenger = (passenger: Passenger) => {
    return http.put<Passenger>(`api/Passengers/${passenger.Id}`, passenger);
};

const deletePassenger = (id: number) => {
    return http.delete<Passenger>(`api/Passenger/${id}`);
};
const getConfirmations = () => {
    return http.get<Array<ConfirmationNumber>>("/api/Confirmations"); 
};

const getConfirmation = (id: number) => {
    return http.get<ConfirmationNumber>(`api/Confirmations/${id}`); 
}; 

const createConfirmation = (confirmation: ConfirmationNumber) => {
    return http.post<ConfirmationNumber>("api/Confirmations", confirmation);
};

const updateConfirmation = (confirmation: ConfirmationNumber) => {
    return http.put<ConfirmationNumber>(`api/Confirmations/${confirmation.Id}`, confirmation);
};

const deleteConfirmation = (id: number) => {
    return http.delete<ConfirmationNumber>(`api/Confirmations/${id}`);
};

const APIService = {
    getFlights, 
    getFlight,
    createFlight,
    updateFlight,
    deleteFlight,
    getPassengers,
    getPassenger,
    createPassenger,
    updatePassenger,
    deletePassenger,
    getConfirmations,
    getConfirmation,
    createConfirmation,
    updateConfirmation,
    deleteConfirmation
}

export default APIService; 