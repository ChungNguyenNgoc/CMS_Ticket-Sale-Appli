export const SHOW_TICKET = "SHOW_TICKET"
export const GET_TICKET = "GET_TICKET"
export const SET_LOADING = "SET_LOADING"
export const SET_SUCCESS = "SET_SUCCESS"
export const SET_ERROR = "SET_ERROR"


export interface Ticket {
    comboPrice: string ; 
    date: string;
    exDate: string;
    packageCode: string;
    stt: number
    tags: Array<string>;
    ticketName: string;
    ticketPrice: string;
    update: string;
}

export interface TicketState {
    ticket: Ticket | null; 
    tickets: Array<Ticket>; 
    loading: boolean;
    error: string;
}

 


