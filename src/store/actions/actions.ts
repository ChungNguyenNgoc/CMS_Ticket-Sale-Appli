import {
  GET_TICKET,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  SHOW_TICKET,
  Ticket,
  TicketState,
} from "../constant/types";
interface ShowTicketAction {
  type: typeof SHOW_TICKET;
  payload: Ticket[] ;
}
interface getTicketAction {
  type: typeof GET_TICKET;
  payload: Ticket;
}
interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}
interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: string;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type TicketAction =
  | ShowTicketAction
  | SetLoadingAction
  | SetSuccessAction
  | SetErrorAction
  | getTicketAction;
  
