import { createAction } from '@reduxjs/toolkit'; 
import Flight from '../../models/flight'; 

export const createFlight = createAction('flight/add', function prepare(flightNumber: number, depDate: string, arrDate: string, depTime: string, arrTime: string, depAirport: string, arrAirport: string, passLimit: number){
    return { 
        payload: {
            FlightNumber: flightNumber,
            DepartureDate: depDate,
            ArrivalDate: arrDate, 
            DepartureTime: depTime,
            ArrivalTime: arrTime,
            DepartureAirport: depAirport,
            ArrivalAirport: arrAirport,
            PassengerLimit: passLimit
        }
    }
});

export const updateFlight = createAction('flights/update', function prepare(flightNumber: number, depDate: string, arrDate: string, depTime: string, arrTime: string, depAirport: string, arrAirport: string, passLimit: number){
    return {
        payload: {
            FlightNumber: flightNumber,
            DepartureDate: depDate,
            ArrivalDate: arrDate, 
            DepartureTime: depTime,
            ArrivalTime: arrTime,
            DepartureAirport: depAirport,
            ArrivalAirport: arrAirport,
            PassengerLimit: passLimit
        }
    }
});

export const deleteFlight = createAction('flights/delete', function prepare(id: number) {
    return{
        payload: {
            FlightNumber: id
        }
    }
}); 

// Id: number;
// FlightNumber: number;
// DepartureDate: string;
// ArrivalDate: string;
// DepartureTime: string;
// ArrivalTime: string;
// DepartureAirport: string;
// ArrivalAirport: string; 
// PassengerLimit: number; 