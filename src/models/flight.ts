import ConfirmationNumber from "./confirmation"; 

interface Flight {
    Id: number;
    FlightNumber: number;
    DepartureDate: string;
    ArrivalDate: string;
    DepartureTime: string;
    ArrivalTime: string;
    DepartureAirport: string;
    ArrivalAirport: string; 
    PassengerLimit: number; 
    Bookings: ConfirmationNumber[]; 
}

export default Flight;