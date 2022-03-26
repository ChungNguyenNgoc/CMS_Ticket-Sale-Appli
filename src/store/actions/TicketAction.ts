import { ThunkAction } from "redux-thunk";

import {
  SHOW_TICKET,
  SET_ERROR,
  SET_SUCCESS,
  SET_LOADING,
  GET_TICKET,
  Ticket,
} from "../constant/types";

import { RootState } from "..";
import firebase, { taskStore } from "../../firebase/TicketManage";
import { TicketAction } from "./actions";
// show ticket
export const showTicket = (): ThunkAction<
  void,
  RootState,
  null,
  TicketAction
> => {
  return async (dispatch) => {
    try {
      await taskStore.get().then(
          (
            snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
          ) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
            const ticket = data.map((item) => ({
             ...item
            }));
            if (ticket.length > 0) {
              const ticketData =  ticket as Ticket[]
              dispatch({
                type: SET_LOADING,
                payload: false,
              });
              dispatch({
                type: SHOW_TICKET,
                payload: ticketData,
              });
            } else {
              dispatch({
                type: SET_ERROR,
                payload: "load data fail!!!",
              });
            }
          
          }
        )
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
};
