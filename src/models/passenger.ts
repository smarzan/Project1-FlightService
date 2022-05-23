import ConfirmationNumber from "./confirmation";

interface Passenger {
    Id: number;
    Name: string; 
    Job: string; 
    Email: string; 
    Age: number; 
    Bookings: ConfirmationNumber[];
}

export default Passenger; 